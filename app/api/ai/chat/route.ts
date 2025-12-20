import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function POST(req: Request) {
  console.log('--- AI ROUTE HIT ---');

  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  if (!token) {
    console.log('❌ token is null');
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  if (!token.id) {
    console.log('❌ token.id is missing');
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const res = await fetch('https://thick-ciel-aliash-3216f530.koyeb.app/ai/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.id}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
