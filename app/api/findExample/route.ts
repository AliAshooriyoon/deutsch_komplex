import prisma from '@/prisma/client';
import { NextResponse, NextRequest } from 'next/server';
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const example = await prisma.example.findUnique({
    where: {
      id: body.id,
    },
  });
  return NextResponse.json(example);
};
