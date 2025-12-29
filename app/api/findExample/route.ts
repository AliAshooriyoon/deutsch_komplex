import { auth } from '@/auth';
import prisma from '@/prisma/client';
import { NextResponse, NextRequest } from 'next/server';
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const session = await auth();
  if (!session?.user || !session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const example = await prisma.example.findUnique({
    where: {
      id: body.id,
    },
  });
  return NextResponse.json(example);
};
