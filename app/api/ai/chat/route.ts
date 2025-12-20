import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function POST(req: Request) {
  console.log('--- AI ROUTE HIT (VERCEL) ---');

  const session = await auth();

  console.log('SESSION:', session);

  if (!session?.user?.id) {
    console.log('❌ session or user.id missing');
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const res = await fetch('https://thick-ciel-aliash-3216f530.koyeb.app/ai/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.user.id}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
