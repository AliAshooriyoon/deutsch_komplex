import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { hash } from 'bcryptjs';

export async function POST(req: Request) {
  const { token, password } = await req.json();

  const tokenRecord = await prisma.passwordResetToken.findUnique({ where: { token } });
  if (!tokenRecord || tokenRecord.expires < new Date()) {
    return NextResponse.json({ error: 'Token invalid or expired.' }, { status: 400 });
  }

  const hashedPassword = await hash(password, 10);

  await prisma.$transaction([
    prisma.user.update({
      where: { id: tokenRecord.userId },
      data: { password: hashedPassword },
    }),
    prisma.passwordResetToken.delete({ where: { token } }),
  ]);

  return NextResponse.json({ message: 'Password updated successfully.' });
}
