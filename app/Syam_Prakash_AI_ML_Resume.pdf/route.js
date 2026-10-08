const lines = [
  'VEMULA SYAM PRAKASH',
  'Guntur, Andhra Pradesh | +91 6305989456 | shyamprakash271@gmail.com',
  'LinkedIn: linkedin.com/in/shyam-prakash-vemula-721029263 | GitHub: github.com/shyamprakash534',
  '',
  'SUMMARY',
  'MCA graduate with a Statistics background targeting AI Engineer / GenAI Developer roles.',
  'Built multi-agent systems with LangGraph, document-grounded RAG pipelines, explainable',
  'predictive models (94% accuracy on 941 records), and cloud-deployed APIs using Python,',
  'Scikit-learn, LangGraph, ChromaDB, and AWS.',
  '',
  'TECHNICAL SKILLS',
  'Programming: Python, SQL, JavaScript',
  'Machine Learning: Scikit-learn, Random Forest, Gradient Boosting, Decision Trees, Predictive Modeling, Cross-validation',
  'Explainable AI: SHAP',
  'GenAI / Agentic AI: RAG, ChromaDB, Ollama, LangGraph, Multi-agent orchestration, Hybrid retrieval',
  'AI Application Development: Flask, FastAPI, REST APIs, Streamlit, Joblib, FPDF',
  'Data Science: Pandas, NumPy, Matplotlib, Feature Engineering, EDA',
  'Databases: PostgreSQL, Redis, ClickHouse, SQLite',
  'Cloud & DevOps: AWS S3, Boto3, EC2, Lambda, RDS, IAM, CloudWatch, Elastic Beanstalk, SageMaker, Docker, GitHub Actions',
  'Tools: Git, GitHub, Jupyter, Render.com',
  '',
  'PROJECTS',
  'Grounded RAG — Document-Grounded RAG Application | Python, FastAPI, ChromaDB, Ollama | Jul 2026',
  '- Built a production RAG application using FastAPI + ChromaDB to ingest PDF/TXT/Markdown documents and generate source-grounded answers with citation labels.',
  '- Tuned chunking and retrieval parameters to improve passage relevance and reduce ungrounded answers; configured interchangeable Ollama and OpenAI-compatible model providers.',
  '- Added document-management UI, automated tests/CI, and API-key protection; deployed live on Render.',
  '',
  'Drug & Dosage Decision-Support Prototype | Python, Scikit-learn, Flask, AWS, SHAP | Jul 2026',
  '- Built an ML decision-support prototype predicting suggested drugs and dosages across 5 medical conditions and 15 drugs; compared Random Forest and Gradient Boosting models to reach 94% accuracy on 941 patient records.',
  '- Applied feature engineering; added SHAP explainability and 5 rule-based safety overrides; documented methodology, evaluation results, and limitations.',
  '- Deployed a Flask REST API on AWS with a 5-screen UI and PDF reporting.',
  '',
  'CodeForge — Multi-Agent AI System | Python, LangGraph, ChromaDB, FastAPI, Docker | Jun 2026',
  '- Built a multi-agent AI system (Planner, Researcher, Architect, Coder, Tester, Reviewer, Security) using LangGraph for conditional routing and orchestration.',
  '- Implemented repository-aware reasoning via AST/source ingestion and hybrid retrieval with ChromaDB, feeding an autonomous test-debug-retest repair loop.',
  '- Added automated test-coverage and security checks, secret detection, sandboxing, human approval gates, and automated Git/GitHub PR creation.',
  '',
  'NanoLink — Distributed High-Throughput URL Shortener | Go, Gin, PostgreSQL, Redis, ClickHouse, Docker | Mar 2026',
  '- Built and deployed a distributed URL shortener in Go/Gin with Redis caching, PostgreSQL storage, and a ClickHouse-based analytics pipeline.',
  '- Exposed REST endpoints for link creation, redirection, and QR-code generation with structured error handling.',
  '- Load-tested the redirect path under concurrent traffic; containerized with Docker and monitored with Prometheus/Grafana.',
  '',
  'EDUCATION',
  "Vignan's Lara Institute of Technology and Science, Vadlamudi — Jul 2026",
  'Master of Computer Applications (MCA)',
  'Acharya Nagarjuna University, Guntur — Jul 2024',
  'Bachelor of Science (Statistics)',
  '',
  'CERTIFICATIONS',
  'Google AI Professional Certificate — Google/Coursera | Aug 2026',
  'Oracle Certified Foundations Associate – Agentic AI | 2026',
  'AWS Cloud Practitioner (CLF-C02) — AWS | 2026'
];

const esc = s => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

export async function GET() {
  const pageWidth = 612;
  const pageHeight = 792;
  const left = 36;
  const top = 756;
  const lineHeight = 10;
  const fontSize = 7.6;
  const maxLines = 70;
  const pageLines = lines.slice(0, maxLines);
  let y = top;
  const content = ['BT', `/F1 ${fontSize} Tf`, `${left} ${y} Td`];
  pageLines.forEach((line, i) => {
    if (i > 0) content.push(`0 -${lineHeight} Td`);
    content.push(`(${esc(line)}) Tj`);
  });
  content.push('ET');
  const stream = content.join('\n');

  const objects = [];
  objects.push('<< /Type /Catalog /Pages 2 0 R >>');
  objects.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>`);
  objects.push(`<< /Length ${Buffer.byteLength(stream, 'latin1')} >>\nstream\n${stream}\nendstream`);
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((obj, idx) => {
    offsets[idx + 1] = Buffer.byteLength(pdf, 'latin1');
    pdf += `${idx + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xref = Buffer.byteLength(pdf, 'latin1');
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Syam_Prakash_AI_ML_Resume.pdf"',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}