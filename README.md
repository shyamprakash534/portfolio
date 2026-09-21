# Vemula Syam Prakash — Portfolio

Personal portfolio showcasing projects across **cloud engineering, data engineering, backend development, and applied AI/ML**.

## About

I am a software developer focused on Python, backend engineering, AI/ML, GenAI, cloud computing, and data engineering, with a Statistics background and hands-on experience building cloud-deployed applications, data pipelines, backend services, predictive models, and AI/RAG systems.

## Featured Projects

| Project | Focus | Technologies |
|---|---|---|
| [JobMatch AI](https://ai-job-application-tracker-o9vp.onrender.com) | Public AI job matcher — resume upload, skills/location preferences, ranked jobs, required/missing skills and source-first application links | Python, FastAPI, JavaScript, httpx, Render |
| [AWS E-Commerce Data Pipeline](https://github.com/shyamprakash534/aws-ecommerce-data-pipeline) | Data pipeline and analytics workflow | Python, AWS, S3, Pandas, Streamlit |
| [Grounded RAG](https://github.com/shyamprakash534/grounded-rag) | Grounded retrieval-augmented generation | Python, RAG, LangGraph, ChromaDB, Ollama |
| [CodeForge](https://github.com/shyamprakash534/Codeforge) | AI-assisted developer tooling | Python, FastAPI, Docker |
| [NanoLink](https://github.com/shyamprakash534/nanolink1) | Production-oriented URL shortener | Go, Docker, Redis, ClickHouse |
| [Drug & Dosage Decision-Support Prototype](https://github.com/shyamprakash534/drug-recommendation) | ML-based decision-support prototype | Python, Flask, scikit-learn, Pandas |
| [E-Commerce Analytics Platform](https://github.com/shyamprakash534/ecommerce-analytics-platform) | Interactive analytics application | Python, Streamlit, Pandas, Plotly |

## JobMatch AI

**JobMatch AI** is a public web application that helps job seekers find current openings matched to their own profile.

### User flow
1. Upload a PDF or DOCX resume.
2. Add skills and preferred locations.
3. Optionally select job roles and work model.
4. The application discovers current jobs from its configured public sources.
5. Jobs are ranked using resume relevance, skills, location, experience eligibility and role relevance.
6. Results show **match score, required skills, missing skills and an application action**.
7. **View & Apply opens the canonical job listing page first**, so users can follow the source's Apply / Continue-to-employer flow instead of being sent to a guessed or potentially broken direct URL.

### Live
- **Live app:** https://ai-job-application-tracker-o9vp.onrender.com
- **Source:** https://github.com/shyamprakash534/ai-job-application-tracker
- **Deployment:** Render

### Application flow
- **Jobicy listings:** open the canonical Jobicy job page first, then continue to the employer website/application from that listing.
- **Hopin listings:** open the public Hopin job page first, where the available Hopin application flow or employer link is presented.

> Job availability and application links depend on the configured public job sources. The application does not claim to contain every job on the internet.

## Certifications

- **Oracle Certified Foundations Associate — Agentic AI** — Oracle University (August 11, 2026 – August 11, 2028)
- Certificate ID: `330515382AAI26OFA`

## Technical Skills

### Programming & Backend
- Python, SQL, Go
- FastAPI, Flask, REST APIs, Gin
- PostgreSQL, MySQL, SQLite, Redis, ClickHouse

### Cloud & Data
- AWS S3, EC2, Lambda, RDS, IAM, CloudWatch, Glue, Athena, SageMaker
- Data pipelines, analytics, ETL workflows, Pandas, NumPy

### AI / ML
- scikit-learn
- Random Forest, Gradient Boosting, Decision Trees
- Predictive modeling and model evaluation
- LangGraph, RAG, ChromaDB, Ollama

### Engineering & DevOps
- Docker
- Terraform
- Git and GitHub
- GitHub Actions / CI
- Streamlit, Plotly
- Render

## Portfolio Website

This repository contains the source for my personal portfolio website, built as a lightweight responsive static site with HTML and CSS.

The portfolio highlights:

- Professional profile and technical strengths
- Cloud, data, backend, and AI/ML projects
- Project-focused skills overview
- Experience and achievements
- Contact and professional links

## CI/CD

The portfolio repository uses **GitHub Actions** to validate the website source, and the site is published through **GitHub Pages**.

The project repositories also include automated checks where applicable, covering tasks such as Python compilation, dependency installation, test execution, data validation, and application smoke tests.

## Repository Structure

```text
portfolio/
├── index.html
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

## Local Preview

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/shyamprakash534/portfolio.git
cd portfolio
```

For a local HTTP server with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Contact

- **GitHub:** https://github.com/shyamprakash534
- **LinkedIn:** https://www.linkedin.com/in/shyam-prakash-vemula-721029263
- **Email:** shyamprakash271@gmail.com

## Note

The projects linked from this portfolio are independent academic, personal, and prototype projects. Project-specific claims, metrics, and deployment details should be interpreted in the context of each project's implementation and documentation.
