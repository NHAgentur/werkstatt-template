import { NextResponse } from "next/server";
import { sendInquiry } from "@/lib/mailer";

type Payload = {
  name?: string;
  email?: string;
  nachricht?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  if (!data.name || !data.email || !data.nachricht) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 422 });
  }

  const result = await sendInquiry("Neue Kontaktanfrage", data);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
