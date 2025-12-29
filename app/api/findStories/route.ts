import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { auth } from '@/auth';

export const GET = async () => {
  const session = await auth();
  if (!session?.user || !session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const res = await prisma.story.findMany();
  return NextResponse.json(res);
};
