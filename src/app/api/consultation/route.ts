export async function POST(req: Request) {
  try {
    const body = await req.json();

    const secret = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_SECRET;
    const baseUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_CONSULTATION_URL;

    const { name, email, contactNumber, subject, message } = body;

    // required fields validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { status: "error", message: "Please fill all required fields" },
        { status: 4000 }
      );
    }

    const url = `${baseUrl}?action=getConsultation&key=${secret}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, contactNumber, subject, message }),
    });

    const contentType = response.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");

    const responseData = isJson
      ? await response.json()
      : { status: "success", message: await response.text() };

    return Response.json(responseData, { status: response.ok ? 200 : 500 });
  } catch (error) {
    console.error("Consultation API Error:", error);
    return Response.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
