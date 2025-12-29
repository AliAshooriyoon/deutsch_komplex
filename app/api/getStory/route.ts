import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/prisma/client';
import { auth } from '@/auth';

export const POST = async (req: NextRequest) => {
  const session = await auth();
  if (!session?.user || !session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  console.log(body);
  const res = await prisma.story.findUnique({
    where: {
      id: body.id,
    },
  });
  return NextResponse.json(res);
};
