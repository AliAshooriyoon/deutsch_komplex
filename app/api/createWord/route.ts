import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import a2Words from '@/anki_wordsA2.json';
export const GET = async () => {
  console.log(a2Words);
  const newFormat = a2Words.map(i => ({ word: i.title, meaning: i.mean, level: 'a2' }));
  // const createdWord = await prisma.lainter.createMany({
  //   data: newFormat,
  //   skipDuplicates: true,
  // });
  return NextResponse.json(newFormat);
};
