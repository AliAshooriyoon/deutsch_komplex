import { auth } from '@/auth';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
export const POST = async (req: NextRequest) => {
  const session = await auth();
  if (!session?.user || !session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  console.log(body.level);
  const whereClause =
    body.level == '' || body.level === null || body.level == undefined ? {} : { level: body.level };
  const words = await prisma.word.findMany({
    where: whereClause,
    orderBy: { title: 'asc' },
  });
  return NextResponse.json(words);
};
