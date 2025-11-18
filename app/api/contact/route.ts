import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      eventDate,
      venue,
      city,
      eventType,
      message,
    } = body

    const htmlContent = `
      <h2>Ny bokningsförfrågan från hemsidan</h2>
      <p><strong>Namn:</strong> ${name || '-'} </p>
      <p><strong>Email:</strong> ${email || '-'} </p>
      <p><strong>Telefon:</strong> ${phone || '-'} </p>
      <p><strong>Eventdatum:</strong> ${eventDate || '-'} </p>
      <p><strong>Stad:</strong> ${city || '-'} </p>
      <p><strong>Venue/Lokal:</strong> ${venue || '-'} </p>
      <p><strong>Typ av event:</strong> ${eventType || '-'} </p>
      <p><strong>Meddelande:</strong><br/>${(message || '').replace(/\n/g, '<br/>')}</p>
    `

    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: { email: 'booking@yingandyang.se', name: 'Ying & Yang Booking' },
        to: [{ email: 'yingyang.bokning@gmail.com', name: 'Ying & Yang' }],
        subject: 'Ny bokningsförfrågan via hemsidan',
        htmlContent,
      }),
    })

    if (!brevoRes.ok) {
      console.error('Brevo error:', await brevoRes.text())
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
