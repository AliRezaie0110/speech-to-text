export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch("https://harf.roshan-ai.ir/api/transcribe_files/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token a85d08400c622b50b18b61e239b9903645297196",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: data?.detail || "خطایی در پاسخ API رخ داد" }),
        { status: response.status }
      );
    }

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    console.error("Proxy Error:", error);
    return new Response(
      JSON.stringify({ error: "خطای داخلی سرور. لطفاً بعداً تلاش کنید." }),
      { status: 500 }
    );
  }
}
