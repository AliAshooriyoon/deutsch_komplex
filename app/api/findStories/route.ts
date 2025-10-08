import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/prisma/client';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await prisma.story.findMany({
    where: {
      level: body.level,
    },
  });
  return NextResponse.json(res);
};
