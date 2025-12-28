import { auth } from '@/auth';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const session = await auth();
  if (!session?.user || !session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const data = await prisma.exam.findMany();
  return NextResponse.json(data);
};
