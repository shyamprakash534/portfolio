export async function GET() {
  const pdfBase64 = 'JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0Yx';
  const bytes = Uint8Array.from(atob(pdfBase64), char => char.charCodeAt(0));
  return new Response(bytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Syam_Prakash_Resume.pdf"',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
