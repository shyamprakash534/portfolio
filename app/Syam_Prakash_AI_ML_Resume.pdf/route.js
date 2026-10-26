const RESUME_BASE64 = "JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCiAxIDAgb2JqCjw8Ci9GMSA3LjIgVGYK";

export async function GET() {
  const pdf = Buffer.from(RESUME_BASE64, "base64");
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=\"Syam_Prakash_Resume.pdf\"",
      "Cache-Control": "no-store",
    },
  });
}
