import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
export const PUT = async (req: NextRequest) => {
  const session = await auth();
  const body = await req.json();
  const newName = await body.name;
  if (!session?.user || !session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  await prisma.user.update({
    where: {
      email: session?.user.email,
    },
    data: { name: newName },
  });
  return NextResponse.json({ message: 'created!' });
};
