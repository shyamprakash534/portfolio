export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const lines = [
  'VEMULA SYAM PRAKASH',
  'Guntur, Andhra Pradesh | +91 6305989456 | shyamprakash271@gmail.com',
  'LinkedIn: linkedin.com/in/shyam-prakash-vemula-721029263 | GitHub: github.com/shyamprakash534',
  'Portfolio: shyamprakash534.github.io/portfolio',
  '',
  'PROFESSIONAL SUMMARY',
  'Master of Computer Applications graduate with a Statistics background and hands-on project experience in AWS cloud',
  'infrastructure, data engineering, backend services, and applied AI. Designed and deployed ETL pipelines on',
  'S3/Glue/Athena, built distributed systems in Go and Python, created multi-agent AI tools with LangGraph, and delivered live',
  'monitored applications using Docker, Terraform, FastAPI, and Flask.',
  '',
  'TECHNICAL SKILLS',
  'Cloud / AWS: S3, Boto3, AWS CLI, EC2, Lambda, RDS, IAM, CloudWatch, Elastic Beanstalk, SageMaker, Glue, Athena',
  'Infrastructure / DevOps: Docker, Terraform, GitHub Actions, Prometheus, Grafana, Render.com',
  'Data Engineering: ETL Pipeline Architecture, Pandas, NumPy, PostgreSQL, MySQL, Redis, ClickHouse, SQLite',
  'Programming: Python, SQL, Go, JavaScript',
  'Backend / APIs: FastAPI, Flask, REST APIs, Gin',
  'ML / AI: Scikit-learn, Random Forest, Gradient Boosting, SHAP, LangGraph, RAG, ChromaDB, Ollama',
  'Visualization: Streamlit, Plotly, Matplotlib',
  '',
  'PROJECTS',
  'AWS E-Commerce Data Pipeline | Python, Pandas, Plotly, Streamlit, AWS S3, Glue, Athena | Sep 2026',
  'GitHub | Live Dashboard on Render',
  '- Designed end-to-end ETL architecture (Raw S3 -> AWS Glue -> Curated S3 -> Athena -> Dashboard) for sales, category, and delivery data.',
  '- Built Streamlit analytics dashboard with CSV upload/validation, revenue/order-volume/AOV KPIs, trend analysis, and late-delivery insights.',
  '- Structured curated Athena tables by category, delivery, and sales dimensions for easy KPI extension; deployed as live web service.',
  'Drug & Dosage Decision-Support Prototype | Python, Scikit-learn, Flask, AWS | Jul 2026',
  'GitHub | Live API on AWS | Springer-format Paper',
  '- Developed ML prototype predicting drugs and dosages across 5 conditions and 15 drugs, achieving 94% accuracy on 941 patient records using Random Forest and Gradient Boosting with cross-validation and F1 evaluation.',
  '- Added SHAP explainability and 5 rule-based safety overrides; deployed Flask REST API on Elastic Beanstalk, S3, RDS, SageMaker & CloudWatch with 5-screen UI and PDF reporting.',
  'Grounded RAG - Document-Grounded RAG Application | Python, FastAPI, ChromaDB, Ollama | Jul 2026',
  'GitHub | Live Demo on Render',
  '- Built production RAG system using FastAPI + ChromaDB for PDF/TXT/Markdown ingestion and source-grounded answers with citation support.',
  '- Tuned chunking/retrieval, supported Ollama and OpenAI-compatible providers, added API-key protection and CI; deployed live on Render.',
  'CodeForge - Autonomous Software Factory | Python, LangGraph, FastAPI, PostgreSQL, Docker | Jun 2026',
  'GitHub | Live on Render + GitHub Actions CI',
  '- Built multi-agent system (Planner, Architect, Coder, Tester, Reviewer, Security) orchestrated with LangGraph, including autonomous test-debug-retest loop using AST ingestion and hybrid retrieval.',
  '- Automated security checks, GitHub PR creation, and observability; deployed on Render with CI.',
  'NanoLink - Distributed High-Throughput URL Shortener | Mar 2026',
  'GitHub | Live Service',
  '- Developed distributed URL shortener with REST APIs for creation, redirection, and QR generation; implemented Redis caching/rate-limiting, PostgreSQL persistence, and ClickHouse analytics.',
  '- Load-tested redirect path, containerized with Docker, provisioned with Terraform, and monitored with Prometheus/Grafana.',
  '',
  'EDUCATION',
  "Vignan's Lara Institute of Technology and Science, Vadlamudi - Jul 2026",
  'Master of Computer Applications (MCA)',
  'Acharya Nagarjuna University, Guntur - Jul 2024',
  'Bachelor of Science (Statistics)',
  '',
  'CERTIFICATIONS',
  '- AWS Cloud Practitioner (CLF-C02) - AWS | 2026',
  '- Google AI Professional Certificate - Google/Coursera | Aug 2026',
  '- Oracle Certified Foundations Associate - Agentic AI - Oracle | 2026'
];

const sections = new Set([
  'PROFESSIONAL SUMMARY',
  'TECHNICAL SKILLS',
  'PROJECTS',
  'EDUCATION',
  'CERTIFICATIONS'
]);

function escapePdfText(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function wrapText(value, maxLength) {
  const words = value.trim().split(/\s+/);
  const result = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      result.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) {
    result.push(current);
  }

  return result.length ? result : [''];
}

function buildEntries() {
  const entries = [];

  lines.forEach((raw, index) => {
    const text = raw.trim();

    if (!text) {
      entries.push({ gap: true, height: 4 });
      return;
    }

    if (index === 0) {
      entries.push({ text, bold: true, size: 15, height: 20 });
      return;
    }

    if (sections.has(text)) {
      entries.push({ text, bold: true, size: 9.5, height: 15 });
      return;
    }

    const heading = /^(AWS E-Commerce|Drug & Dosage|Grounded RAG|CodeForge|NanoLink|Vignan's Lara|Acharya Nagarjuna)/.test(text);
    const wrapped = wrapText(text, heading ? 106 : 112);

    wrapped.forEach((line, lineIndex) => {
      entries.push({
        text: line,
        bold: heading && lineIndex === 0,
        size: heading ? 7.6 : 7.2,
        height: heading ? 10 : 9.2
      });
    });
  });

  return entries;
}

function buildPages(entries) {
  const pageTop = 756;
  const pageBottom = 36;
  const pages = [[]];
  let usedHeight = 0;

  for (const entry of entries) {
    if (pages[pages.length - 1].length && usedHeight + entry.height > pageTop - pageBottom) {
      pages.push([]);
      usedHeight = 0;
    }

    pages[pages.length - 1].push(entry);
    usedHeight += entry.height;
  }

  return pages;
}

function buildPageStreams(pages) {
  const pageWidth = 612;
  const left = 40;
  const top = 756;

  return pages.map((page, pageIndex) => {
    const commands = ['BT'];
    let y = top;

    for (const entry of page) {
      y -= entry.height;

      if (entry.gap) {
        continue;
      }

      commands.push(`${entry.bold ? '/F2' : '/F1'} ${entry.size} Tf`);
      commands.push(`1 0 0 1 ${left} ${y} Tm`);
      commands.push(`(${escapePdfText(entry.text)}) Tj`);
    }

    commands.push('/F1 7 Tf');
    commands.push(`1 0 0 1 ${pageWidth - 110} 22 Tm`);
    commands.push(`(PAGE ${pageIndex + 1} OF ${pages.length}) Tj`);
    commands.push('ET');

    return commands.join('\n');
  });
}

function buildPdf() {
  const pages = buildPages(buildEntries());
  const streams = buildPageStreams(pages);
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'
  ];
  const pageIds = [];

  pages.forEach((_, index) => {
    const pageId = 5 + index * 2;
    const contentId = pageId + 1;
    pageIds.push(pageId);

    objects[pageId - 1] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`;
    objects[contentId - 1] = `<< /Length ${Buffer.byteLength(streams[index], 'latin1')} >>\nstream\n${streams[index]}\nendstream`;
  });

  objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`;

  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets[index + 1] = Buffer.byteLength(pdf, 'latin1');
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, 'latin1');
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;

  for (let index = 1; index <= objects.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return pdf;
}

export async function GET() {
  const pdf = buildPdf();

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Syam_Prakash_Resume.pdf"',
      'Cache-Control': 'no-store, max-age=0, must-revalidate'
    }
  });
}
