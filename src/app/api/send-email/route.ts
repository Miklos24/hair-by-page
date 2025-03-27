import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const { message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // This is the default sender on free accounts
      to: "miklos.bowling@gmail.com", // Replace with your email
      subject: "New Client Form Submission from hairbypage.com",
      text: `New consultation form submission from hairbypage.com:\n\n${message}`,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
