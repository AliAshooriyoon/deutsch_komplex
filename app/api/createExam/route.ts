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
        { role: 'system', content: `Du bist ein präziser Prüfungsaufgabengenerator für das ÖSD.` },
        { role: 'system', content: body.adminMessage },
        { role: 'user', content: body.message },
      ],
      temperature: 0.2,
      top_p: 0.9,
      max_tokens: 3000,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const answer = completion.choices[0].message.content;
    return NextResponse.json({ reply: answer });
  } catch (err: unknown) {
    console.error('Error:', err);
    //    if (err!.code === 429) {
    //   return NextResponse.json(
    //     {
    //       error:
    //         'Zu viele Anfragen! Bitte warte ein paar Sekunden und versuche es erneut. (429 Rate Limit)',
    //     },
    //     { status: 429 }
    //   );
    // }
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'OpenAI request failed' }, { status: 500 });
  }
}
