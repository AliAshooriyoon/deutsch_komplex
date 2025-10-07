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
  try {
    const completion = await openai.chat.completions.create({
      model: 'mistralai/mistral-small-3.2-24b-instruct:free', // or "gpt-4o" if you have access
      messages: [
        { role: 'system', content: 'You are an exam creator.' },
        { role: 'user', content: 'Create 3 random B2 German exam questions.' },
      ],
    });

    console.log('API KEY:', process.env.OPENROUTER_API_KEY ? '✅ Loaded' : '❌ Missing');
    const answer = completion.choices[0].message.content;
    // console.log('---------------answer-----------------');
    // console.log(answer);
    return NextResponse.json({ reply: answer });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: err.message || 'OpenAI request failed' }, { status: 500 });
  }
}
