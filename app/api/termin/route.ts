import { NextResponse } from "next/server";
import { sendInquiry } from "@/lib/mailer";

type Payload = {
  name?: string;
  email?: string;
  telefon?: string;
  kennzeichen?: string;
  nachricht?: string;
  datenschutz?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  if (!data.name || !data.email || !data.telefon || !data.nachricht) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 422 });
  }

  if (data.datenschutz !== "on") {
    return NextResponse.json(
      { error: "Datenschutz muss akzeptiert werden" },
      { status: 422 },
    );
  }

  const result = await sendInquiry("Neue Termin-Anfrage", data);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
