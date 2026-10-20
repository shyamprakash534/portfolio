export const runtime = 'nodejs';

const resumeBase64 = 'JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUiAvRjMrMCAyMSAwIFIKPj4KL0ZvbnQgPDwKL0YxIDIgMCBSCj4+Cj4+CmVuZG9iago=';

export async function GET() {
  const pdf = Buffer.from(resumeBase64, 'base64');

  return new Response(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Syam_Prakash_Resume.pdf"',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
