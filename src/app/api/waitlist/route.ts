// export async function POST(req: Request) {
//   try {
//     console.log("API request received");

//     const { email } = await req.json();
//     console.log("Request Body:", email);

//     if (!email) {
//       console.error("Error: Missing email in request");
//       return Response.json(
//         { status: "error", message: "Email is required" },
//         { status: 400 }
//       );
//     }

//     console.log("Sending request to Google Apps Script...");

//     const response = await fetch(
//       "https://script.google.com/macros/s/AKfycbz9Xv59Pn-aVmAdzQlgsAEbkzM_zqbntP4t2cAp9LlSZtFoI1_XxM2M3jhlHLRTZh7O/exec",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       }
//     );

//     console.log("Google Apps Script Response Status:", response.status);

//     const data = await response.json();
//     console.log("Google Apps Script Response Data:", data);

//     return Response.json(data);
//   } catch (error) {
//     console.error("Error:", error);
//     return Response.json(
//       { status: "error", message: "Failed to subscribe." },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return Response.json(
        { status: "error", message: "Email is required" },
        { status: 400 }
      );
    }

    const googleAppsScriptUrl =
      "https://script.google.com/macros/s/AKfycbz9Xv59Pn-aVmAdzQlgsAEbkzM_zqbntP4t2cAp9LlSZtFoI1_XxM2M3jhlHLRTZh7O/exec?action=addSubscription";

    const response = await fetch(googleAppsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const textResponse = await response.text();
    console.log("Raw Response from Google Apps Script:", textResponse);

    const contentType = response.headers.get("content-type") || "";
    let data;

    if (contentType.includes("application/json")) {
      data = JSON.parse(textResponse); // ✅ If JSON, parse it
    } else {
      console.warn("Unexpected Response Type:", textResponse);
      data = { status: "success", message: textResponse }; // ✅ Handle as plain text
    }

    return Response.json(data, { status: response.ok ? 200 : 500 });
  } catch (error) {
    console.error("API Error:", JSON.stringify(error, null, 2));
    return Response.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
