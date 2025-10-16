import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const words = await prisma.word.findMany({
    where: { level: body.level },
  });
  return NextResponse.json(words);
};
