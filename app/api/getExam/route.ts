import prisma from '@/prisma/client';

export const POST = async () => {
  await prisma.exam.findUnique({
    where: {
      id: '',
    },
  });
};
