export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const response = await fetch(`https://harf.roshan-ai.ir/api/requests/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: "Token a85d08400c622b50b18b61e239b9903645297196",
        "Content-Type": "application/json",
      },
    });

    const text = await response.text();

    console.log("DELETE response status:", response.status);
    console.log("DELETE response text:", text);

    if (response.status === 204) {
      return new Response(null, { status: 204 });
    }

    return new Response(text, {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(" Proxy DELETE Error:", error);
    return new Response(JSON.stringify({ error: "خطا در حذف فایل" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
