import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const data = await prisma.exam.findMany();
  return NextResponse.json(data);
};
