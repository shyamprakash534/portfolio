export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  return Response.redirect(new URL('/Syam_Prakash_Resume.pdf', request.url), 307);
}
