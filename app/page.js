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

const expertise = [
  {num:'01',title:'Backend Development',category:'ENGINEERING',text:'Build practical APIs and services with clear boundaries, predictable behavior and maintainable code.',stack:'Python · FastAPI · Flask · Go'},
  {num:'02',title:'Applied AI & ML',category:'INTELLIGENCE',text:'Turn models and retrieval workflows into usable applications with attention to grounded outputs and evaluation.',stack:'Scikit-learn · XGBoost · RAG · LangGraph'},
  {num:'03',title:'Cloud & Data Systems',category:'INFRASTRUCTURE',text:'Connect data pipelines, storage, analytics and containerized services into systems that can be run and observed.',stack:'AWS · Docker · PostgreSQL · Redis'}
];

const skills = {
  'Languages & Core':['Python','JavaScript','SQL','Go','Statistics'],
  'AI / ML / GenAI':['Scikit-learn','XGBoost','LangGraph','RAG','ChromaDB','Ollama'],
  'Backend & Web':['FastAPI','Flask','REST APIs','React','Node.js'],
  'Cloud & Data':['AWS','S3','Glue','Athena','Docker','PostgreSQL','Redis','ClickHouse']
};

const certifications = [
  {name:'Google AI Professional',issuer:'Google',note:'Applied AI learning and practical workflows'},
  {name:'AWS Cloud Practitioner',issuer:'Amazon Web Services',note:'Cloud fundamentals and core AWS concepts'}
];

function Arrow(){return <span aria-hidden="true">↗</span>}

export default function Home(){
  const [menu,setMenu]=useState(false),[muted,setMuted]=useState(true),[active,setActive]=useState(null);
  const videoRef=useRef(null);

  useEffect(()=>{
    document.body.style.overflow=menu||active?'hidden':'';
    return()=>{document.body.style.overflow=''};
  },[menu,active]);

  useEffect(()=>{
    const items=document.querySelectorAll('.reveal-on-scroll');
    if(!('IntersectionObserver' in window)){items.forEach(item=>item.classList.add('is-visible'));return;}
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
      });
    },{threshold:0.12});
    items.forEach(item=>observer.observe(item));
    return()=>observer.disconnect();
  },[]);

  const toggleMute=()=>{
    if(!videoRef.current)return;
    videoRef.current.muted=!videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return <main className="site">
    <nav className="nav">
      <a href="#top" className="brand">Syam<span className="brand-dot">.</span></a>
      <div className="navlinks"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#skills">Skills</a><a href="#projects">Work</a><a href="#contact">Contact</a></div>
      <div className="nav-right"><span className="availability"><b/> Open to opportunities</span><button className="menu-button" aria-label="Open menu" onClick={()=>setMenu(true)}><span>Menu</span></button></div>
    </nav>

    {menu&&<div className="modal menu-modal" onClick={()=>setMenu(false)}><div className="modal-card menu-card" onClick={e=>e.stopPropagation()}><div className="menu-card-head"><a href="#top" className="brand" onClick={()=>setMenu(false)}>Syam<span className="brand-dot">.</span></a><button className="modal-close" onClick={()=>setMenu(false)} aria-label="Close menu">×</button></div><div className="section-kicker">NAVIGATE</div><div className="contact-links"><a className="contact-link" href="#about" onClick={()=>setMenu(false)}>About <Arrow/></a><a className="contact-link" href="#expertise" onClick={()=>setMenu(false)}>Expertise <Arrow/></a><a className="contact-link" href="#skills" onClick={()=>setMenu(false)}>Skills <Arrow/></a><a className="contact-link" href="#projects" onClick={()=>setMenu(false)}>Selected work <Arrow/></a><a className="contact-link" href="#certifications" onClick={()=>setMenu(false)}>Certifications <Arrow/></a><a className="contact-link" href="#contact" onClick={()=>setMenu(false)}>Contact <Arrow/></a></div><a className="pill menu-hire" href="mailto:shyamprakash534@gmail.com" onClick={()=>setMenu(false)}>Let’s connect <Arrow/></a></div></div>}

    <section className="hero" id="top">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-label="Syam Prakash portfolio reel"><source src="hero-video.mp4" type="video/mp4"/></video>
      <div className="hero-video-shade"/>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">SOFTWARE · PYTHON · AI / ML · CLOUD</p>
          <h1><span className="intro-light">Hi, I’m Syam</span><br/><span className="dark">Software Developer</span></h1>
          <p className="hero-lead">I build practical software across Python, AI/ML, backend engineering, cloud and data.</p>
          <div className="actions"><a className="pill primary" href="#projects">View My Work <Arrow/></a><a className="pill light" href="#contact">Contact Me</a></div>
        </div>
      </div>
      <div className="hero-tools"><button className="mute" onClick={toggleMute} aria-label={muted?'Unmute portfolio reel':'Mute portfolio reel'}>{muted?'◖×':'◖))'}</button><span className="reel-label">{muted?'UNMUTE REEL':'MUTE REEL'}</span></div>
      <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section className="section about reveal-on-scroll" id="about"><div className="section-kicker">01 / ABOUT ME</div><div className="about-grid"><div className="about-intro"><h2>Hello<span>!</span></h2><p className="about-copy">I’m Vemula Syam Prakash, an MCA graduate with a Statistics foundation. I enjoy the space between an idea and a working system — designing APIs, training models, building data workflows and shipping usable applications.</p><p className="about-copy">My focus is practical engineering: clean architecture, evidence over hype, reproducible systems and software that can actually run.</p></div><div className="principle-panel"><span className="panel-label">HOW I LIKE TO BUILD</span><div className="principles"><span><b>01</b> Practical AI</span><span><b>02</b> Backend systems</span><span><b>03</b> Cloud & data</span><span><b>04</b> Maintainable code</span></div><p className="about-note">Curious by default. Grounded in implementation.</p></div></div></section>

    <section className="section expertise reveal-on-scroll" id="expertise"><div className="section-kicker">02 / WHAT I DO</div><div className="expertise-head"><div><h2>Building useful<br/><em>digital systems.</em></h2></div><p className="section-intro">From APIs and AI prototypes to data workflows, I focus on systems that solve a real problem and can be explained, tested and improved.</p></div><div className="expertise-grid">{expertise.map(item=><article className="expertise-card" key={item.num}><div className="expertise-card-top"><span>{item.num}</span><span className="expertise-symbol">↘</span></div><small>{item.category}</small><h3>{item.title}</h3><p>{item.text}</p><div className="expertise-stack">{item.stack}</div></article>)}</div></section>

    <section className="section skills reveal-on-scroll" id="skills"><div className="section-kicker">03 / TECHNICAL STACK</div><div className="skills-head"><h2>Technologies I<br/><em>work with.</em></h2><p className="section-intro">A practical toolkit I use to design, build, test and ship working software.</p></div><div className="skills-grid">{Object.entries(skills).map(([group,items],index)=><div className="skill-box" key={group}><span className="skill-index">0{index+1}</span><h3>{group}</h3><div className="skill-tags">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div></section>

    <section className="section projects reveal-on-scroll" id="projects"><div className="section-kicker">04 / SELECTED WORK</div><div className="project-intro"><h2>Projects with<br/><em>a purpose.</em></h2><p>Explore real builds, their technical decisions and working demos where available. Open any case study for more details.</p></div><div className="project-grid">{projects.map(p=><ProjectCard key={p.name} p={p} onOpen={()=>setActive(p)}/>)}</div></section>

    <section className="section certifications reveal-on-scroll" id="certifications"><div className="section-kicker">05 / LEARNING & CREDENTIALS</div><div className="cert-heading"><h2>Keep learning.<br/><em>Keep building.</em></h2><p className="section-intro">Foundational learning that supports the practical work across AI and cloud.</p></div><div className="credential-track">{certifications.map((cert,index)=><article className="credential-card" key={cert.name}><div className="credential-mark">{index===0?'AI':'AWS'}</div><div className="credential-detail"><small>{cert.issuer}</small><h3>{cert.name}</h3><p>{cert.note}</p></div><span className="credential-arrow">↗</span></article>)}</div></section>

    <section className="section contact reveal-on-scroll" id="contact"><div className="contact-grid"><div><div className="section-kicker">06 / LET’S CONNECT</div><h2>Have a good<br/><em>problem?</em></h2><p className="contact-copy">I’m open to software development, Python, AI/ML, backend, data and cloud opportunities. If you have a role, project or idea worth discussing, let’s talk.</p></div><div className="contact-links"><a className="contact-link" href="mailto:shyamprakash534@gmail.com">Email <Arrow/></a><a className="contact-link" href="https://www.linkedin.com/in/shyam-prakash-vemula-721029263/" target="_blank" rel="noreferrer">LinkedIn <Arrow/></a><a className="contact-link" href="https://github.com/shyamprakash534" target="_blank" rel="noreferrer">GitHub <Arrow/></a><a className="contact-link" href="Syam_Prakash_AI_ML_Resume.pdf" download>Download Resume <Arrow/></a></div></div></section>

    <footer className="footer"><span>© 2026 Vemula Syam Prakash</span><span>Python · AI/ML · Cloud · Data</span><a href="#top">BACK TO TOP ↑</a></footer>

    {active&&<div className="modal project-modal" onClick={()=>setActive(null)}><article className="modal-card project-modal-card" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setActive(null)} aria-label="Close case study">×</button><div className="section-kicker">{active.num} / {active.tag}</div><h3>{active.name}</h3><p>{active.detail}</p><ul className="evidence">{active.evidence.map(x=><li key={x}>{x}</li>)}</ul><div className="chips">{active.stack.map(x=><span className="chip" key={x}>{x}</span>)}</div><div className="modal-actions"><a className="pill primary" href={active.live} target="_blank" rel="noreferrer">Live Demo <Arrow/></a><a className="pill light" href={active.repo} target="_blank" rel="noreferrer">GitHub <Arrow/></a></div></article></div>}
  </main>
}

function ProjectCard({p,onOpen}){return <article className="project-card" onClick={onOpen} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ')onOpen()}}><div className="project-art"><span className="number">{p.num}</span><div className="orb"/><span className="label">{p.metric}</span></div><div className="project-body"><div className="project-top"><h3>{p.name}</h3><span>↗</span></div><p>{p.desc}</p><div className="chips">{p.stack.map(x=><span className="chip" key={x}>{x}</span>)}</div><div className="project-links"><span>OPEN CASE STUDY</span><Arrow/></div></div></article>}
