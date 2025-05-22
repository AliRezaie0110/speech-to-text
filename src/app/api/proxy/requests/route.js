// app/api/proxy/requests/route.js
export async function GET() {
  try {
    const response = await fetch("https://harf.roshan-ai.ir/api/requests/", {
      method: "GET",
      headers: {
        Authorization: "Token a85d08400c622b50b18b61e239b9903645297196",
        "Content-Type": "application/json",
        "X-CSRFToken": "HKw4mkY7hphryS0LDi0xu6mIucOnv9QHsL2gHvEvuiv73P6wgwopRuoJdEKiulvG",
      },
    });

    const data = await response.json();
    console.log("Response from real API:", data);

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(JSON.stringify({ error: "خطا در پروکسی" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
