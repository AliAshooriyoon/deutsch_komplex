import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'http://localhost:3000',
    'X-Title': 'deutsch komplex',
  },
});
export async function POST(req: Request) {
  const body = await req.json();
  try {
    const completion = await openai.chat.completions.create({
      model: 'mistralai/mistral-small-3.2-24b-instruct:free',
      messages: [
        { role: 'system', content: 'You are an exam creator.' },
        { role: 'system', content: body.message },
      ],
    });

    const answer = completion.choices[0].message.content;
    return NextResponse.json({ reply: answer });
  } catch (err: unknown) {
    console.error('Error:', err);

    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'OpenAI request failed' }, { status: 500 });
  }
}
