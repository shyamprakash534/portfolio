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
  '- Deployed the Flask web app on Render with a 5-screen UI and PDF reporting.',
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

const normalize = value => value
  .replace(/[\u2018\u2019]/g, "'")
  .replace(/[\u201C\u201D]/g, '"')
  .replace(/[\u2013\u2014]/g, '-')
  .replace(/\u00B7/g, ' | ')
  .replace(/\u2192/g, '->')
  .replace(/[^\x20-\x7E]/g, '');

const esc = value => normalize(value)
  .replace(/\\/g, '\\\\')
  .replace(/\(/g, '\\(')
  .replace(/\)/g, '\\)');

const wrap = (value, maxChars) => {
  const words = normalize(value).trim().split(/\s+/).filter(Boolean);
  const result = [];
  let current = '';
  for (const word of words) {
    const next = current ? current + ' ' + word : word;
    if (next.length > maxChars && current) {
      result.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) result.push(current);
  return result.length ? result : [''];
};

const sectionNames = new Set([
  'SUMMARY',
  'TECHNICAL SKILLS',
  'PROJECTS',
  'EDUCATION',
  'CERTIFICATIONS'
]);

const entries = [];
lines.forEach((raw, index) => {
  const line = normalize(raw).trim();
  if (!line) {
    if (entries.length && entries[entries.length - 1].kind !== 'gap') {
      entries.push({ kind: 'gap', height: 3 });
    }
    return;
  }

  if (index === 0) {
    entries.push({ text: line, kind: 'title', bold: true, size: 15, height: 21 });
    return;
  }

  if (index === 1 || index === 2) {
    wrap(line, 124).forEach(text => {
      entries.push({ text, kind: 'contact', bold: false, size: 7.2, height: 9 });
    });
    return;
  }

  if (sectionNames.has(line)) {
    entries.push({ text: line, kind: 'section', bold: true, size: 9, height: 14 });
    return;
  }

  if (line.startsWith('- ')) {
    wrap(line.slice(2), 108).forEach((text, lineIndex) => {
      entries.push({
        text: (lineIndex === 0 ? '- ' : '  ') + text,
        kind: 'bullet',
        bold: false,
        size: 7.2,
        height: 9.2
      });
    });
    return;
  }

  const isProjectHeading = /^(Grounded RAG|Drug & Dosage|CodeForge|NanoLink)\s*-/i.test(line);
  const isEducationHeading = /^(Vignan's Lara|Acharya Nagarjuna)/i.test(line);
  const maxChars = isProjectHeading ? 112 : 120;
  wrap(line, maxChars).forEach((text, lineIndex) => {
    entries.push({
      text,
      kind: isProjectHeading || isEducationHeading ? 'subheading' : 'body',
      bold: (isProjectHeading || isEducationHeading) && lineIndex === 0,
      size: isProjectHeading ? 7.7 : 7.2,
      height: isProjectHeading ? 10 : 9.2
    });
  });
});

const pageWidth = 612;
const pageHeight = 792;
const left = 40;
const top = 756;
const bottom = 36;
const availableHeight = top - bottom;
const pages = [[]];
let usedHeight = 0;

for (const entry of entries) {
  if (pages[pages.length - 1].length && usedHeight + entry.height > availableHeight) {
    pages.push([]);
    usedHeight = 0;
  }
  pages[pages.length - 1].push(entry);
  usedHeight += entry.height;
}

const pageStreams = pages.map((page, pageIndex) => {
  const commands = [];
  let y = top;

  if (pageIndex > 0) {
    y -= 18;
    commands.push('/F2 10 Tf');
    commands.push('1 0 0 1 ' + left + ' ' + y + ' Tm');
    commands.push('(VEMULA SYAM PRAKASH - RESUME CONTINUED) Tj');
    y -= 6;
  }

  page.forEach(entry => {
    y -= entry.height;
    if (entry.kind === 'gap') return;

    const font = entry.bold ? '/F2 ' : '/F1 ';
    commands.push(font + entry.size + ' Tf');
    commands.push('1 0 0 1 ' + left + ' ' + y + ' Tm');
    commands.push('(' + esc(entry.text) + ') Tj');
  });

  commands.push('/F1 7 Tf');
  commands.push('1 0 0 1 ' + (pageWidth - 104) + ' 22 Tm');
  commands.push('(VEMULA SYAM PRAKASH | PAGE ' + (pageIndex + 1) + ' OF ' + pages.length + ') Tj');
  return commands.join('\n');
});

const objects = [];
objects.push('<< /Type /Catalog /Pages 2 0 R >>');
objects.push('');
for (let index = 0; index < pages.length; index += 1) {
  objects.push('');
  objects.push('');
}
const regularFontId = objects.length + 1;
objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
const boldFontId = objects.length + 1;
objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');

const pageIds = pages.map((_, index) => 3 + index * 2);
objects[1] = '<< /Type /Pages /Kids [' + pageIds.map(id => id + ' 0 R').join(' ') + '] /Count ' + pages.length + ' >>';

pages.forEach((_, index) => {
  const pageId = pageIds[index];
  const contentId = pageId + 1;
  const stream = pageStreams[index];

  objects[pageId - 1] =
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + pageWidth + ' ' + pageHeight + '] ' +
    '/Resources << /Font << /F1 ' + regularFontId + ' 0 R /F2 ' + boldFontId + ' 0 R >> >> ' +
    '/Contents ' + contentId + ' 0 R >>';

  objects[contentId - 1] =
    '<< /Length ' + Buffer.byteLength(stream, 'latin1') + ' >>\nstream\n' + stream + '\nendstream';
});

let pdf = '%PDF-1.4\n';
const offsets = [0];
objects.forEach((object, index) => {
  offsets[index + 1] = Buffer.byteLength(pdf, 'latin1');
  pdf += (index + 1) + ' 0 obj\n' + object + '\nendobj\n';
});
const xrefOffset = Buffer.byteLength(pdf, 'latin1');
pdf += 'xref\n0 ' + (objects.length + 1) + '\n0000000000 65535 f \n';
for (let index = 1; index <= objects.length; index += 1) {
  pdf += String(offsets[index]).padStart(10, '0') + ' 00000 n \n';
}
pdf += 'trailer\n<< /Size ' + (objects.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + xrefOffset + '\n%%EOF';

return new Response(pdf, {
  headers: {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="Syam_Prakash_AI_ML_Resume.pdf"',
    'Cache-Control': 'public, max-age=3600'
  }
});
