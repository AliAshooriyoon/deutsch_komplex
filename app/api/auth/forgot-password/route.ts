import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { randomBytes } from 'crypto';
import { addHours } from 'date-fns';
import { Resend } from 'resend';
import PasswordResetEmail from '@/app/emails/PasswordResetEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ message: 'If the email exists, a link was sent.' });
  }

  const token = randomBytes(32).toString('hex');
  const expires = addHours(new Date(), 1);

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      token,
      expires,
    },
  });

  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: [email],
    subject: 'Reset your password',
    react: PasswordResetEmail({ username: user.name as string, resetUrl }),
  });

  return NextResponse.json({ message: 'If the email exists, a link was sent.' });
}
