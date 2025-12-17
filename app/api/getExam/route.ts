import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await prisma.exam.findMany({
    where: {
      // topic: body.title,
      type: 'schreiben',
      level: body.level,
    },
  });
  return NextResponse.json(res);
};
