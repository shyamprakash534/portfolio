function makePdf(lines) {
  const leading = 9.2;
  const commands = ['BT', '/F1 7.2 Tf', '40 818 Td'];
  for (const line of lines) {
    if (line === '') { commands.push(`0 -${leading} Td`); continue; }
    const safe = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    commands.push(`(${safe}) Tj`);
    commands.push(`0 -${leading} Td`);
  }
  commands.push('ET');
  const stream = commands.join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new TextEncoder().encode(pdf);
}

export async function GET() {
  const lines = [
    'VEMULA SYAM PRAKASH',
    'Guntur, Andhra Pradesh | +91 6305989456 | shyamprakash271@gmail.com',
    'LinkedIn: linkedin.com/in/shyam-prakash-vemula-721029263 | GitHub: github.com/shyamprakash534',
    'Portfolio: syamprakash534.github.io/portfolio', '',
    'PROFESSIONAL SUMMARY',
    'Master of Computer Applications graduate with a Statistics background and hands-on project experience in AWS cloud',
    'infrastructure, data engineering, backend services, and applied AI. Designed and deployed ETL pipelines on',
    'S3/Glue/Athena, built distributed systems in Go and Python, created multi-agent AI tools with LangGraph, and delivered live',
    'monitored applications using Docker, Terraform, FastAPI, and Flask.', '',
    'TECHNICAL SKILLS',
    'Cloud / AWS: S3, Boto3, AWS CLI, EC2, Lambda, RDS, IAM, CloudWatch, Elastic Beanstalk, SageMaker, Glue, Athena',
    'Infrastructure / DevOps: Docker, Terraform, GitHub Actions, Prometheus, Grafana, Render.com',
    'Data Engineering: ETL Pipeline Architecture, Pandas, NumPy, PostgreSQL, MySQL, Redis, ClickHouse, SQLite',
    'Programming: Python, SQL, Go, JavaScript',
    'Backend / APIs: FastAPI, Flask, REST APIs, Gin',
    'ML / AI: Scikit-learn, Random Forest, Gradient Boosting, SHAP, LangGraph, RAG, ChromaDB, Ollama',
    'Visualization: Streamlit, Plotly, Matplotlib', '',
    'PROJECTS',
    'AWS E-Commerce Data Pipeline | Python, Pandas, Plotly, Streamlit, AWS S3, Glue, Athena',
    'Sep 2026 | GitHub | Live Dashboard on Render',
    '• Designed end-to-end ETL architecture (Raw S3 → AWS Glue → Curated S3 → Athena → Dashboard) for sales, category,',
    '  and delivery data.',
    '• Built Streamlit analytics dashboard with CSV upload/validation, revenue/order-volume/AOV KPIs, trend analysis, and',
    '  late-delivery insights.',
    '• Structured curated Athena tables by category, delivery, and sales dimensions for easy KPI extension; deployed as live',
    '  web service.', '',
    'Drug & Dosage Decision-Support Prototype | Python, Scikit-learn, Flask, AWS',
    'Jul 2026 | GitHub | Live API on AWS | Springer-format Paper',
    '• Developed ML prototype predicting drugs and dosages across 5 conditions and 15 drugs, achieving 94% accuracy on',
    '  941 patient records using Random Forest and Gradient Boosting with cross-validation and F1 evaluation.',
    '• Added SHAP explainability and 5 rule-based safety overrides; deployed Flask REST API on Elastic Beanstalk, S3, RDS,',
    '  SageMaker & CloudWatch with 5-screen UI and PDF reporting.', '',
    'Grounded RAG — Document-Grounded RAG Application | Python, FastAPI, ChromaDB, Ollama',
    'Jul 2026 | GitHub | Live Demo on Render',
    '• Built production RAG system using FastAPI + ChromaDB for PDF/TXT/Markdown ingestion and source-grounded',
    '  answers with citation support.',
    '• Tuned chunking/retrieval, supported Ollama and OpenAI-compatible providers, added API-key protection and CI;',
    '  deployed live on Render.', '',
    'CodeForge — Autonomous Software Factory | Python, LangGraph, FastAPI, PostgreSQL, Docker',
    'Jun 2026 | GitHub | Live on Render + GitHub Actions CI',
    '• Built multi-agent system (Planner, Architect, Coder, Tester, Reviewer, Security) orchestrated with LangGraph, including',
    '  autonomous test-debug-retest loop using AST ingestion and hybrid retrieval.',
    '• Automated security checks, GitHub PR creation, and observability; deployed on Render with CI.', '',
    'NanoLink — Distributed High-Throughput URL Shortener',
    'Mar 2026 | GitHub | Live Service',
    '• Developed distributed URL shortener with REST APIs for creation, redirection, and QR generation; implemented Redis',
    '  caching/rate-limiting, PostgreSQL persistence, and ClickHouse analytics.',
    '• Load-tested redirect path, containerized with Docker, provisioned with Terraform, and monitored with',
    '  Prometheus/Grafana.', '',
    'EDUCATION',
    "Vignan's Lara Institute of Technology and Science, Vadlamudi — Jul 2026",
    'Master of Computer Applications (MCA)',
    'Acharya Nagarjuna University, Guntur — Jul 2024',
    'Bachelor of Science (Statistics)', '',
    'CERTIFICATIONS',
    '• AWS Cloud Practitioner (CLF-C02) — AWS | 2026',
    '• Google AI Professional Certificate — Google/Coursera | Aug 2026',
    '• Oracle Certified Foundations Associate – Agentic AI — Oracle | 2026'
  ];
  const pdf = makePdf(lines);
  return new Response(pdf, { headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment; filename="Syam_Prakash_Resume.pdf"', 'Cache-Control': 'no-store' } });
}
