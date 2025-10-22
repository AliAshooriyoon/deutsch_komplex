import prisma from '@/prisma/client';
import { NextResponse, NextRequest } from 'next/server';
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const examples = await prisma.example.findMany({
    where: {
      type: body.typeOfExam,
    },
    orderBy: {
      level: 'asc',
    },
  });
  return NextResponse.json(examples);
};
