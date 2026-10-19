'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {name:'CodeForge',tag:'AI / GENAI',num:'01',desc:'A security-conscious multi-agent engineering workspace for generating, testing, repairing and reviewing code.',stack:['Python','LangGraph','FastAPI','Docker'],repo:'https://github.com/shyamprakash534/Codeforge',live:'https://codeforge-3l85.onrender.com',metric:'MULTI-AGENT WORKSPACE',detail:'Plan → research → architect → code → test → debug → review → security → approval.',evidence:['Specialised multi-agent workflow','FastAPI + Streamlit + Docker','Automated tests and GitHub Actions CI']},
  {name:'NanoLink',tag:'BACKEND / SYSTEMS',num:'02',desc:'A distributed URL shortener engineered around caching, rate limiting, analytics and observability.',stack:['Go','Gin','PostgreSQL','Redis','ClickHouse'],repo:'https://github.com/shyamprakash534/nanolink1',live:'https://nanolink1.onrender.com',metric:'DISTRIBUTED SYSTEM',detail:'REST APIs for URL creation, redirection and QR generation with a lightweight redirect path and analytics.',evidence:['Redis caching and rate limiting','PostgreSQL + ClickHouse analytics','Docker Compose, Terraform, Prometheus and Grafana']},
  {name:'Grounded RAG',tag:'GENAI / RAG',num:'03',desc:'A local-first RAG system that retrieves relevant knowledge and produces source-backed answers.',stack:['Python','FastAPI','ChromaDB','Ollama'],repo:'https://github.com/shyamprakash534/grounded-rag',live:'https://grounded-rag-oww5.onrender.com',metric:'SOURCE-GROUNDED AI',detail:'Upload PDF, TXT or Markdown and ask questions with answers grounded in retrieved source excerpts.',evidence:['Local embeddings with Ollama + ChromaDB','Source citations in generated answers','Unit tests and GitHub Actions CI']},
  {name:'AWS E-Commerce Pipeline',tag:'CLOUD / DATA',num:'04',desc:'An analytics application built around a designed raw → curated → analytics AWS pipeline.',stack:['Streamlit','Pandas','S3','Glue','Athena'],repo:'https://github.com/shyamprakash534/aws-ecommerce-data-pipeline',live:'https://aws-ecommerce-data-pipeline.onrender.com',metric:'ETL / ANALYTICS',detail:'CSV validation, revenue, order-volume, AOV, trends and late-delivery insights.',evidence:['Raw S3 → Glue → curated S3 → Athena design','Analytics dashboard with business KPIs','GitHub Actions CI']},
  {name:'JobMatch AI',tag:'PYTHON / AI',num:'05',desc:'A source-first job matching product that parses resumes and ranks opportunities with weighted relevance.',stack:['Python','FastAPI','httpx','pypdf'],repo:'https://github.com/shyamprakash534/ai-job-application-tracker',live:'https://ai-job-application-tracker-o9vp.onrender.com',metric:'PRODUCT ENGINEERING',detail:'Upload a resume, add skills and locations, and get ranked jobs from public sources.',evidence:['Public job APIs called server-side','Weighted relevance scoring','Original listing links rather than guessed application URLs']},
  {name:'Drug & Dosage Recommender',tag:'MACHINE LEARNING',num:'06',desc:'A Flask machine-learning prototype with rule-based safety checks. Educational demo, not medical advice.',stack:['Python','Scikit-learn','Flask','Gunicorn'],repo:'https://github.com/shyamprakash534/drug-recommendation',live:'https://drug-recommendation-5uxr.onrender.com',metric:'EDUCATIONAL ML DEMO',detail:'End-to-end ML application from model training and inference to a web interface and PDF report.',evidence:['Random Forest drug prediction','Gradient Boosting dosage prediction','Joblib model persistence and PDF reports']}
];

const skills = {
  'Languages & Core':['Python','JavaScript','SQL','Go','Statistics'],
  'AI / ML / GenAI':['Scikit-learn','XGBoost','LangGraph','RAG','ChromaDB','Ollama'],
  'Backend & Web':['FastAPI','Flask','REST APIs','React','Node.js'],
  'Cloud & Data':['AWS','S3','Glue','Athena','Docker','PostgreSQL','Redis','ClickHouse']
};

function Arrow(){return <span aria-hidden="true">↗</span>}

export default function Home(){
  const [menu,setMenu]=useState(false),[muted,setMuted]=useState(true),[active,setActive]=useState(null);
  const videoRef=useRef(null);
  useEffect(()=>{document.body.style.overflow=menu||active?'hidden':'';return()=>{document.body.style.overflow=''}},[menu,active]);
  const toggleMute=()=>{if(!videoRef.current)return;videoRef.current.muted=!videoRef.current.muted;setMuted(videoRef.current.muted)};

  return <main className="site">
    <nav className="nav">
      <a href="#top" className="brand">Syam<span className="brand-dot">.</span></a>
      <div className="navlinks"><a href="#about">About</a><a href="#projects">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
      <div className="nav-right"><span className="availability"><b/> Open to opportunities</span><button className="menu-button" aria-label="Open menu" onClick={()=>setMenu(true)}>☰</button></div>
    </nav>

    {menu&&<div className="modal" onClick={()=>setMenu(false)}><div className="modal-card" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setMenu(false)}>×</button><div className="section-kicker">QUICK NAVIGATION</div><div className="contact-links"><a className="contact-link" href="#about" onClick={()=>setMenu(false)}>About <Arrow/></a><a className="contact-link" href="#projects" onClick={()=>setMenu(false)}>Selected work <Arrow/></a><a className="contact-link" href="#skills" onClick={()=>setMenu(false)}>Skills <Arrow/></a><a className="contact-link" href="#contact" onClick={()=>setMenu(false)}>Contact <Arrow/></a><a className="contact-link" href="https://github.com/shyamprakash534" target="_blank" rel="noreferrer">GitHub <Arrow/></a></div></div></div>}

    <section className="hero" id="top">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-label="Syam Prakash portfolio reel"><source src="hero-video.mp4" type="video/mp4"/></video>
      <div className="hero-video-shade"/>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">SOFTWARE • AI • DATA • CLOUD</p>
          <h1><span className="intro-light">Hi, I’m</span><br/><span className="dark">Syam Prakash</span></h1>
          <p className="hero-role">Software Developer</p>
          <p className="hero-lead">I build practical software across Python, AI/ML, backend engineering, cloud and data.</p>
          <div className="actions"><a className="pill primary" href="#projects">View My Work <Arrow/></a><a className="pill light" href="#contact">Contact Me</a></div>
        </div>
      </div>
      <div className="hero-tools"><button className="mute" onClick={toggleMute} aria-label={muted?'Unmute portfolio reel':'Mute portfolio reel'}>{muted?'🔇':'🔊'}</button><span className="reel-label">{muted?'UNMUTE REEL':'MUTE REEL'}</span></div>
      <div className="scroll-cue">SCROLL</div>
    </section>

    <section className="section about" id="about"><div className="section-kicker">01 / ABOUT ME</div><div className="about-grid"><h2>Building with <em>purpose.</em></h2><div><p className="about-copy">I’m Vemula Syam Prakash, an MCA graduate with a Statistics foundation. I enjoy the space between an idea and a working system — designing APIs, training models, building data workflows and shipping usable applications.</p><p className="about-copy">My focus is practical engineering: clean architecture, evidence over hype, reproducible systems and software that can actually run.</p><div className="principles"><span>01 / Practical AI</span><span>02 / Backend systems</span><span>03 / Cloud & data</span><span>04 / Maintainable code</span></div></div></div></section>

    <section className="section projects" id="projects"><div className="section-kicker">02 / SELECTED WORK</div><div className="project-intro"><h2>Things I’ve <em>built.</em></h2><p>Real projects with repositories and live demos where available. Click any project for a closer look.</p></div><div className="project-grid">{projects.slice(0,3).map(p=><ProjectCard key={p.name} p={p} onOpen={()=>setActive(p)}/>)}</div><div className="more-projects">{projects.slice(3).map(p=><button className="mini-project" key={p.name} onClick={()=>setActive(p)}><strong>{p.name}</strong><small>{p.tag} · {p.metric}</small></button>)}</div></section>

    <section className="section skills" id="skills"><div className="section-kicker">03 / TOOLKIT</div><h2>My <em>stack.</em></h2><div className="skills-grid">{Object.entries(skills).map(([group,items])=><div className="skill-box" key={group}><h3>{group}</h3><div className="skill-tags">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div></section>

    <section className="section contact" id="contact"><div className="contact-grid"><div><div className="section-kicker" style={{color:'rgba(255,255,255,.7)'}}>04 / LET’S CONNECT</div><h2>Let’s build<br/><em>something.</em></h2><p className="contact-copy">I’m open to software development, Python, AI/ML, backend, data and cloud opportunities. If you have a role, project or idea worth discussing, I’d love to hear from you.</p></div><div className="contact-links"><a className="contact-link" href="mailto:shyamprakash534@gmail.com">Email <Arrow/></a><a className="contact-link" href="https://www.linkedin.com/in/shyam-prakash-vemula-721029263/" target="_blank" rel="noreferrer">LinkedIn <Arrow/></a><a className="contact-link" href="https://github.com/shyamprakash534" target="_blank" rel="noreferrer">GitHub <Arrow/></a><a className="contact-link" href="Syam_Prakash_AI_ML_Resume.pdf" download>Download Resume <Arrow/></a></div></div></section>

    <footer className="footer"><span>© 2026 Vemula Syam Prakash</span><span>Python · AI/ML · Cloud · Data</span></footer>

    {active&&<div className="modal" onClick={()=>setActive(null)}><article className="modal-card" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setActive(null)}>×</button><div className="section-kicker">{active.num} / {active.tag}</div><h3>{active.name}</h3><p>{active.detail}</p><ul className="evidence">{active.evidence.map(x=><li key={x}>{x}</li>)}</ul><div className="chips">{active.stack.map(x=><span className="chip" key={x}>{x}</span>)}</div><div className="modal-actions"><a className="pill primary" href={active.live} target="_blank" rel="noreferrer">Live Demo <Arrow/></a><a className="pill light" href={active.repo} target="_blank" rel="noreferrer">GitHub <Arrow/></a></div></article></div>}
  </main>
}

function ProjectCard({p,onOpen}){return <article className="project-card" onClick={onOpen} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ')onOpen()}}><div className="project-art"><span className="number">{p.num}</span><div className="orb"/><span className="label">{p.metric}</span></div><div className="project-body"><div className="project-top"><h3>{p.name}</h3><span>↗</span></div><p>{p.desc}</p><div className="chips">{p.stack.map(x=><span className="chip" key={x}>{x}</span>)}</div><div className="project-links"><span>VIEW CASE STUDY</span><Arrow/></div></div></article>}
