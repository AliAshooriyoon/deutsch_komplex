import { auth } from '@/auth';
import prisma from '@/prisma/client';
import { NextResponse, type NextRequest } from 'next/server';
export const POST = async (req: NextRequest) => {
  const session = await auth();
  if (!session?.user || !session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  const res = await prisma.example.findMany({
    where: {
      type: body.type,
    },
    orderBy: {
      level: 'asc',
    },
  });
  return NextResponse.json(res);
};
