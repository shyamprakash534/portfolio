import { readFile } from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'Syam_Prakash_Resume.pdf');
  const pdf = await readFile(filePath);

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Syam_Prakash_Resume.pdf"',
      'Cache-Control': 'no-store',
    },
  });
}
