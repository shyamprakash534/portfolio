import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Html, OrbitControls, useGLTF } from '@react-three/drei';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';
import * as THREE from 'three';
import './styles.css';

const profile = {
  name: 'Syam Prakash Vemula',
  role: 'Software Developer • Python • AI/ML • Cloud • Data',
  summary: 'MCA graduate building practical software across backend engineering, AI/ML, cloud, and data systems.',
  github: 'https://github.com/shyamprakash534',
  linkedin: 'https://www.linkedin.com/in/syam-prakash-vemula-721029263'
};

const projects = [
  { title:'JobMatch AI', tag:'AI / Full Stack', description:'A job-matching and application workflow focused on connecting candidate profiles with relevant opportunities.', link:'https://ai-job-application-tracker-o9vp.onrender.com' },
  { title:'AWS E-Commerce Data Pipeline', tag:'Cloud / Data', description:'A cloud data pipeline using AWS storage and analytics services to transform e-commerce data into queryable insights.', link:'https://aws-ecommerce-data-pipeline.onrender.com' },
  { title:'E-Commerce Analytics Platform', tag:'Data / Analytics', description:'An analytics platform for exploring e-commerce performance and turning raw data into useful business views.', link:'https://ecommerce-analytics-platform-b342.onrender.com' },
  { title:'Drug & Dosage Decision-Support Prototype', tag:'AI / ML', description:'A machine-learning prototype using ensemble methods to support drug and dosage recommendations.', link:'https://drug-recommendation-5uxr.onrender.com' },
  { title:'NanoLink Distributed URL Shortener', tag:'Backend / Distributed', description:'A containerized URL-shortening system exploring PostgreSQL, ClickHouse, Docker, and service-oriented infrastructure.', link:'https://github.com/shyamprakash534' }
];

const skills = [
  ['Python','Backend & automation'],['FastAPI / Flask','API development'],['SQL','Data & backend'],['AWS','Cloud & data'],['Docker','Containers'],['GitHub Actions','CI/CD'],['Scikit-learn','Machine learning'],['RAG / LangGraph','Applied AI'],['PostgreSQL','Databases'],['Pandas / NumPy','Data work'],['JavaScript','Web development'],['Go','Backend systems']
];

function Model({ url, kind, scrollProgress=0 }) {
  const { scene } = useGLTF(url);
  const ref = useRef();
  const target = useRef(new THREE.Vector3());
  useFrame((state, delta) => {
    if (!ref.current) return;
    if (kind === 'avatar') {
      target.current.set((state.pointer.x * 0.22), (state.pointer.y * 0.08), 0);
      ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, target.current.x, 4, delta);
      ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, -target.current.y, 4, delta);
    }
    if (kind === 'laptop') {
      const open = THREE.MathUtils.smoothstep(scrollProgress, 0.05, 0.65);
      ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, -open * 0.42, 5, delta);
      ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, open * 0.08, 4, delta);
    }
  });
  return <primitive ref={ref} object={scene} />;
}

function AvatarScene() {
  const [ready,setReady] = useState(true);
  return <Canvas camera={{position:[0,0.2,3.8],fov:35}} dpr={[1,1.8]} gl={{antialias:true,alpha:true}}>
    <ambientLight intensity={1.2}/><directionalLight position={[3,4,3]} intensity={3}/><pointLight position={[-3,1,2]} intensity={1.5}/>
    <Suspense fallback={<Html center><span className="loader">Loading model…</span></Html>}><Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.18}><group scale={1.45} position={[0,-1.35,0]}><Model url="/models/avatar.glb" kind="avatar"/></group></Float><Environment preset="city"/></Suspense>
  </Canvas>
}

function LaptopScene({progress}) {
  return <Canvas camera={{position:[0,0.5,4],fov:34}} dpr={[1,1.8]} gl={{antialias:true,alpha:true}}>
    <ambientLight intensity={1.1}/><spotLight position={[2,4,4]} intensity={5} angle={0.35} penumbra={1}/><pointLight position={[-3,1,2]} intensity={2}/>
    <Suspense fallback={<Html center><span className="loader">Loading model…</span></Html>}><group scale={1.55} position={[0,-0.9,0]}><Model url="/models/laptop.glb" kind="laptop" scrollProgress={progress}/></group><Environment preset="studio"/></Suspense>
  </Canvas>
}

function FloatingIcon({i, children}) {
  const [hover,setHover] = useState(false);
  return <motion.div className="skill-orb" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} animate={{y:[0,-10,0],rotate:[0,2,-1,0],scale:hover?1.08:1}} transition={{y:{duration:3.2+i*.12,repeat:Infinity,ease:'easeInOut'},rotate:{duration:4.5+i*.15,repeat:Infinity,ease:'easeInOut'},scale:{duration:.25}}}><div className="orb-inner"><span className="orb-mark">{children[0]}</span><strong>{children[1]}</strong><small>{children[2]}</small></div></motion.div>
}

function Nav(){ return <header className="nav"><a className="brand" href="#top">SP<span>.</span></a><nav><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a></nav><a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={15}/></a></header> }

function App(){
  const [laptopProgress,setLaptopProgress] = useState(0);
  useEffect(()=>{ const onScroll=()=>{ const el=document.getElementById('experience'); if(!el)return; const r=el.getBoundingClientRect(); const p=Math.min(1,Math.max(0,(window.innerHeight-r.top)/(window.innerHeight+r.height*.7))); setLaptopProgress(p); }; window.addEventListener('scroll',onScroll,{passive:true}); onScroll(); return()=>window.removeEventListener('scroll',onScroll); },[]);
  return <div id="top" className="app"><div className="noise"/><Nav/>
    <main>
      <section className="hero section-grid"><div className="hero-copy"><div className="eyebrow"><span className="dot"/> Available for opportunities</div><h1>Building useful<br/><em>things with code.</em></h1><p>{profile.summary}</p><div className="hero-actions"><a className="button primary" href="#projects">Explore work <ArrowUpRight size={17}/></a><a className="button ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div><div className="mini-meta"><span><MapPin size={14}/> India</span><span>•</span><span>MCA · July 2026</span></div></div><div className="hero-model"><AvatarScene/><div className="model-caption">INTERACTIVE 3D <span>↗</span></div></div></section>

    <section id="experience" className="experience section-grid"><div className="section-copy"><div className="section-kicker">01 / EXPERIENCE</div><h2>From ideas to<br/><em>working systems.</em></h2><p>My work sits at the intersection of software development, data, cloud infrastructure, and applied AI. I enjoy taking an ambiguous problem and turning it into a concrete, testable system.</p><div className="experience-list"><div><span>01</span><div><strong>Software & Backend</strong><small>Python · APIs · Databases · Distributed systems</small></div></div><div><span>02</span><div><strong>AI / Machine Learning</strong><small>Scikit-learn · RAG · LangGraph · Decision support</small></div></div><div><span>03</span><div><strong>Cloud & Data</strong><small>AWS · Docker · Data pipelines · Analytics</small></div></div></div></div><div className="laptop-wrap"><LaptopScene progress={laptopProgress}/><div className="laptop-hint">SCROLL TO OPEN</div></div></section>

    <section id="projects" className="projects"><div className="section-heading"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects with a<br/><em>purpose.</em></h2></div><p>A selection of systems, applications, and experiments built across AI, cloud, data, and backend engineering.</p></div><div className="project-grid">{projects.map((p,i)=><motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="project-card" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{delay:i*.07,duration:.5}}><div className="card-top"><span>{String(i+1).padStart(2,'0')}</span><ExternalLink size={17}/></div><div><span className="project-tag">{p.tag}</span><h3>{p.title}</h3><p>{p.description}</p></div><div className="card-line"/></motion.a>)}</div></section>

    <section id="skills" className="skills"><div className="skills-copy"><div className="section-kicker">03 / TOOLKIT</div><h2>A stack built<br/><em>to ship.</em></h2><p>Tools I use to turn ideas into APIs, models, pipelines, and production-ready software.</p></div><div className="orb-field">{skills.map(([name,desc],i)=><FloatingIcon key={name} i={i}>{[name.slice(0,2).toUpperCase(),name,desc]}</FloatingIcon>)}</div></section>

    <section id="contact" className="contact"><div className="section-kicker">04 / CONTACT</div><h2>Have something<br/><em>worth building?</em></h2><p>Let's connect and talk about software, AI, data, or your next project.</p><a className="contact-mail" href="mailto:shyamprakash534@gmail.com"><Mail size={18}/> shyamprakash534@gmail.com <ArrowUpRight size={17}/></a><div className="socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div></section>
    </main><footer><span>© 2026 Syam Prakash Vemula</span><span>Designed & built with React Three Fiber</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);