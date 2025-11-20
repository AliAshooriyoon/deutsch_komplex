import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/prisma/client';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log(body);
  const res = await prisma.story.findUnique({
    where: {
      id: body.id,
    },
  });
  return NextResponse.json(res);
};
