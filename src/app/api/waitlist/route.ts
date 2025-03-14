export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbz9Xv59Pn-aVmAdzQlgsAEbkzM_zqbntP4t2cAp9LlSZtFoI1_XxM2M3jhlHLRTZh7O/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { status: "error", message: "Failed to subscribe." },
      { status: 500 }
    );
  }
}
