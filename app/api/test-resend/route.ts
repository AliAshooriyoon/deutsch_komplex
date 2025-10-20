import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  console.log('🔑 FULL API KEY:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['spatialmoina@tiffincrane.com'],
      subject: 'TEST EMAIL',
      text: 'If you see this, API KEY WORKS!',
    });

    return NextResponse.json({ success: true, data, error });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
