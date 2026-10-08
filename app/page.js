'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const projects = [
  {name:"CodeForge",tag:"AI / GENAI",num:"01",desc:"A security-conscious multi-agent engineering workspace for generating, testing, repairing and reviewing code.",stack:["Python", "LangGraph", "FastAPI", "Docker"],repo:"https://github.com/shyamprakash534/Codeforge",live:"https://codeforge-3l85.onrender.com",metric:"MULTI-AGENT WORKSPACE",detail:"Turns a software request into a controlled workflow of specialised agents, with an autonomous test-debug-retest loop and automated security checks.",evidence:["Workflow: Plan → Research → Architect → Code → Test → Debug → Review → Security → Approval → PR", "FastAPI service with a Streamlit interface; Docker and monitoring config in the repo", "Automated tests and GitHub Actions CI"],note:"Submit a repository task in the live app and inspect the workflow result."},
  {name:"NanoLink",tag:"BACKEND / SYSTEMS",num:"02",desc:"A distributed URL shortener engineered around caching, rate limiting, analytics and observability.",stack:["Go", "Gin", "PostgreSQL", "Redis", "ClickHouse"],repo:"https://github.com/shyamprakash534/nanolink1",live:"https://nanolink1.onrender.com",metric:"DISTRIBUTED SYSTEM",detail:"REST APIs for creation, redirection and QR generation, built around a lightweight redirect path with asynchronous analytics.",evidence:["Redis caching and rate limiting, PostgreSQL persistence, ClickHouse analytics", "Docker Compose, Terraform for AWS, and Prometheus and Grafana observability in the repo", "Go tests, a latency benchmark script and GitHub Actions CI"],note:"The live deployment runs the core shortener with ClickHouse analytics disabled, because no production ClickHouse is attached."},
  {name:"Grounded RAG",tag:"GENAI / RAG",num:"03",desc:"A local-first RAG system that retrieves relevant knowledge and produces source-backed answers.",stack:["Python", "FastAPI", "ChromaDB", "Ollama"],repo:"https://github.com/shyamprakash534/grounded-rag",live:"https://grounded-rag-oww5.onrender.com",metric:"SOURCE-GROUNDED AI",detail:"Upload PDF, TXT or Markdown, then ask questions and get answers that cite the retrieved source excerpts.",evidence:["Embeddings generated locally with Ollama and stored in ChromaDB", "Answers cite retrieved sources as [S1], [S2]; documents can be listed and deleted", "Unit tests, GitHub Actions CI and optional OpenAI-compatible provider support"],note:"The public instance serves the UI and API. The no-API-key AI mode runs Ollama locally, so full answers need Ollama on your machine."},
  {name:"AWS E-Commerce Pipeline",tag:"CLOUD / DATA",num:"04",desc:"A Streamlit analytics app for e-commerce data, built around a designed raw → curated → analytics AWS pipeline.",stack:["Streamlit", "Pandas", "S3", "Glue", "Athena"],repo:"https://github.com/shyamprakash534/aws-ecommerce-data-pipeline",live:"https://aws-ecommerce-data-pipeline.onrender.com",metric:"ETL / ANALYTICS APP",detail:"CSV upload and validation with revenue, order-volume and AOV KPIs, trend analysis and late-delivery insights.",evidence:["Designed flow: raw S3 → AWS Glue → curated S3 → Athena → dashboard", "Curated tables structured by sales, category and delivery dimensions", "GitHub Actions CI"],note:"The AWS flow is the intended design and the repo states it is not provisioned in a live AWS account. The live demo is the Streamlit analytics layer."},
  {name:"JobMatch AI",tag:"PYTHON / AI",num:"05",desc:"A source-first job matching product that parses resumes and ranks opportunities with weighted relevance.",stack:["Python", "FastAPI", "httpx", "pypdf"],repo:"https://github.com/shyamprakash534/ai-job-application-tracker",live:"https://ai-job-application-tracker-o9vp.onrender.com",metric:"PRODUCT ENGINEERING",detail:"Upload a PDF or DOCX resume, add skills and locations, and get ranked jobs from public sources.",evidence:["Jobs come from the public Jobicy and Hopin Jobs APIs, called server-side", "Weighted score: skills 35%, resume relevance 30%, location 20%, eligibility 10%, role 5%", "View & Apply opens the original listing, never a guessed application URL"],note:""},
  {name:"Drug & Dosage Recommender",tag:"MACHINE LEARNING",num:"06",desc:"A Flask machine-learning prototype that predicts drugs and dosages, with rule-based safety checks. Educational demo, not medical advice.",stack:["Python", "Scikit-learn", "Flask", "Gunicorn"],repo:"https://github.com/shyamprakash534/drug-recommendation",live:"https://drug-recommendation-5uxr.onrender.com",metric:"EDUCATIONAL ML DEMO",detail:"An end-to-end ML application from model training through inference to a web interface and PDF report.",evidence:["Random Forest predicts the drug; Gradient Boosting predicts the dosage", "Rule-based treatment scheduling and safety checks", "Model persistence with Joblib, PDF reports, served with Gunicorn"],note:"Educational prototype for software-engineering demonstration. It is not medical advice."}
];

const skills = ['Python','Go','SQL','AI / ML','GenAI & RAG','FastAPI','Flask','AWS','ETL','PostgreSQL','Redis','Docker','Terraform','GitHub Actions','Scikit-learn','LangGraph','Ollama','ChromaDB'];

const process = [
  ['01','DISCOVER','Problem → user → measurable outcome'],
  ['02','DESIGN','Architecture → data → interfaces'],
  ['03','BUILD','Python → services → product'],
  ['04','VERIFY','Tests → evaluation → review'],
  ['05','SHIP','Docker → CI/CD → cloud'],
  ['06','OPERATE','Logs → metrics → iteration']
];

const RESUME_URL='/Syam_Prakash_AI_ML_Resume.pdf';
const BASE_PATH=process.env.NEXT_PUBLIC_BASE_PATH || '';
const HERO_VIDEO=`${BASE_PATH}/hero-video.mp4`;
const HERO_POSTER=`${BASE_PATH}/hero-poster.jpg`;

function Arrow(){return <span aria-hidden="true">↗</span>}

export default function Home(){
  const [mouse,setMouse]=useState({x:50,y:50});
  const [active,setActive]=useState(null);
  const [menu,setMenu]=useState(false);
  const [progress,setProgress]=useState(0);
  const closeRef=useRef(null);const lastFocus=useRef(null);
  useEffect(()=>{if(active){lastFocus.current=document.activeElement;closeRef.current&&closeRef.current.focus();document.body.style.overflow='hidden';return()=>{document.body.style.overflow='';const el=lastFocus.current;lastFocus.current=null;if(el&&el.isConnected&&el.focus)el.focus()}}},[active]);
  useEffect(()=>{
    const move=e=>setMouse({x:e.clientX/window.innerWidth*100,y:e.clientY/window.innerHeight*100});
    const scroll=()=>setProgress(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100);
    const key=e=>{if(e.key==='Escape'){setMenu(false);setActive(null)}};
    window.addEventListener('pointermove',move); window.addEventListener('scroll',scroll,{passive:true}); window.addEventListener('keydown',key);
    scroll(); return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('scroll',scroll);window.removeEventListener('keydown',key)};
  },[]);

  const trapTab=e=>{if(e.key!=='Tab')return;const f=[...e.currentTarget.querySelectorAll('a[href],button')];if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}};
  const featured=useMemo(()=>projects.slice(0,3),[]);

  return <main id="top" style={{'--mx':`${mouse.x}%`,'--my':`${mouse.y}%`,'--progress':`${progress}%`}}>
    <div className="progress"/><div className="noise"/>
    <nav className="nav">
      <a className="brand" href="#top"><span>VSP</span><i>●</i></a>
      <div className="navlinks"><a href="#work">Work</a><a href="#system">System</a><a href="#stack">Stack</a><a href="#contact">Contact</a></div>
      <div className="nav-right"><span className="status"><b/> Open to opportunities</span><button className="menu-button" onClick={()=>setMenu(true)} aria-label="Open navigation">⌘ K</button></div>
    </nav>

    {menu&&<div className="command-overlay" role="dialog" aria-modal="true" onClick={()=>setMenu(false)}><div className="command" onClick={e=>e.stopPropagation()}><div className="command-top"><span>QUICK NAVIGATION</span><button onClick={()=>setMenu(false)}>ESC</button></div>{[['#work','Selected work'],['#system','Engineering system'],['#stack','Toolkit & certifications'],['#contact','Contact'],['https://github.com/shyamprakash534','GitHub']].map(([href,label])=><a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer" onClick={()=>setMenu(false)}><span>{label}</span><Arrow/></a>)}</div></div>}

    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={HERO_POSTER} aria-hidden="true">
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="hero-shade"/>
      <div className="hero-grid"/><div className="hero-glow"/>
      <div className="hero-content">
        <div className="eyebrow"><span className="pulse"/> PYTHON · AI/ML · GENAI · BACKEND · CLOUD <span>/ 2026</span></div>
        <div className="hero-main">
          <div className="hero-copy">
            <p className="overline">SOFTWARE ENGINEER / AI BUILDER</p>
            <h1>Build smart.<br/><em>Ship real.</em></h1>
            <p className="hero-lead">I’m <strong>Vemula Syam Prakash</strong> — an MCA graduate with a Statistics foundation, building practical AI products, backend systems and cloud/data workflows.</p>
            <div className="actions"><a className="button primary" href="#work">Explore work <Arrow/></a>{RESUME_URL&&<a className="button ghost" href={RESUME_URL} download>Resume <span aria-hidden="true">↓</span></a>}<a className="button ghost" href="https://github.com/shyamprakash534" target="_blank" rel="noreferrer">GitHub <Arrow/></a><a className="quiet-link" href="https://www.linkedin.com/in/shyam-prakash-vemula-721029263/" target="_blank" rel="noreferrer">LinkedIn <Arrow/></a></div>
            <div className="hero-meta"><span>BASED IN INDIA</span><span>06 LIVE PROJECTS</span><span>OPEN TO BUILD</span></div>
          </div>
          <div className="terminal-wrap">
            <div className="terminal-glow"/>
            <div className="terminal">
              <div className="terminal-bar"><span/><span/><span/><b>vsp / portfolio</b></div>
              <div className="terminal-body"><p><i>01</i><span>$</span> whoami</p><h3>Vemula Syam Prakash</h3><p><i>02</i><span>$</span> focus --now</p><div className="terminal-tags"><b>PYTHON</b><b>GENAI</b><b>BACKEND</b><b>AWS</b></div><p><i>03</i><span>$</span> status</p><p className="ok">● shipping real systems</p><p><i>04</i><span>$</span> <strong className="cursor">_</strong></p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom"><span>SCROLL / EXPLORE</span><div/><span>01—06</span></div>
    </section>