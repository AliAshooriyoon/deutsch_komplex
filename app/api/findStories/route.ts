import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export const GET = async () => {
  const res = await prisma.story.findMany();
  return NextResponse.json(res);
};
