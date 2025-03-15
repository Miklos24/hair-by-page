import { NextRequest, NextResponse } from "next/server";
import Twilio from "twilio";

export async function POST(request: NextRequest) {
  const { message } = await request.json();
  const client = Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  try {
    const response = await client.messages.create({
      body: `New consultation form submission from hairbypage.com:\n\n${message}`,
      from: "+15482909261",
      to: "12066505378",
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
