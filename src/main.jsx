import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, ArrowRight, Menu, X, Instagram, Linkedin, Dribbble, Plus, Sparkles } from 'lucide-react';
import './styles.css';

const projects = [
  { id: '01', title: 'Form & Function', type: 'Digital experience', year: '2026', category: 'Web design', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', description: 'A calm, considered digital home for a contemporary architecture studio. Built around generous space, confident typography and a simple browsing experience.' },
  { id: '02', title: 'Objects of Desire', type: 'Art direction', year: '2026', category: 'Branding', image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=85', description: 'A visual identity exploration for a design-led objects label, pairing tactile materials with a restrained editorial system.' },
  { id: '03', title: 'The Slow Edit', type: 'E-commerce concept', year: '2025', category: 'Web design', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85', description: 'A thoughtful shopping experience for a curated wardrobe. The concept puts product imagery, clarity and ease at the centre.' },
  { id: '04', title: 'Sunday Rituals', type: 'Campaign & identity', year: '2025', category: 'Branding', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85', description: 'A warm, human campaign direction for a modern lifestyle brand, expressed through natural light, soft forms and a flexible identity.' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const [sent, setSent] = useState(false);
  const visible = projects.filter(p => filter === 'All' || p.category === filter);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className="header">
      <a className="wordmark" href="#top" onClick={closeMenu}>ALEX<span>®</span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#work" onClick={closeMenu}>Selected work <sup>04</sup></a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <a className="availability" href="mailto:hello@alexstyles.com"><span className="status-dot"></span> Available for select projects</a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-topline"><span>INDEPENDENT CREATIVE / 2026</span><span>BASED EVERYWHERE&nbsp; ↗</span></div>
        <div className="hero-copy">
          <p className="kicker"><Sparkles size={14}/> DESIGN WITH INTENTION</p>
          <h1>Making digital<br/>feel <em>human.</em></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I'm Alex — a designer and creative thinker shaping thoughtful identities and digital experiences with clarity, character and a little curiosity.</p>
            <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={25}/></a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=90" alt="Sunlit creative studio with a minimal interior"/>
          <div className="image-note"><span>01 / 04</span><span>IDEAS, MADE TANGIBLE.</span></div>
        </div>
        <div className="marquee"><div>LESS, BUT BETTER <i>✳</i> FORM FOLLOWS FEELING <i>✳</i> MADE TO MATTER <i>✳</i> LESS, BUT BETTER <i>✳</i></div></div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-head"><div><p className="kicker">A FEW GOOD THINGS</p><h2>Selected <em>work.</em></h2></div><p className="section-aside">A collection of identities, interfaces<br/>and ideas brought to life.</p></div>
        <div className="filters">{['All','Web design','Branding'].map(f=><button key={f} className={filter===f?'filter active':'filter'} onClick={()=>setFilter(f)}>{f}<span>{f==='All'?'04':f==='Web design'?'02':'02'}</span></button>)}</div>
        <div className="project-grid">
          {visible.map((p,i)=><article className={`project-card project-${p.id}`} key={p.id}>
            <button className="project-image" onClick={()=>setActive(p)} aria-label={`View ${p.title} project`}><img src={p.image} alt={p.title}/><span className="project-open"><ArrowUpRight/></span><span className="project-number">{p.id}</span></button>
            <div className="project-meta"><div><h3>{p.title}</h3><p>{p.type}</p></div><span>{p.year}</span></div>
          </article>)}
        </div>
        <div className="work-foot"><span>MORE IN THE WORKS</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-label"><p className="kicker">A LITTLE ABOUT ME</p><span>02 — 04</span></div>
        <div className="about-content"><h2>Good design is<br/>felt before it's <em>seen.</em></h2><div className="about-lower"><p>I bring strategy, design and a hands-on approach together to create work that feels clear, considered and full of life. From the first rough idea to the final tiny detail, I believe the best outcomes come from staying curious and caring about the craft.</p><div className="capabilities"><span>WHAT I DO</span><p>Visual identity <b>✳</b> Digital design <b>✳</b> Art direction <b>✳</b> Creative development</p></div></div></div>
      </section>

      <section className="statement"><span className="statement-mark">“</span><p>Make it simple.<br/><em>Make it meaningful.</em><br/>Make it matter.</p><span className="statement-credit">A CREATIVE POINT OF VIEW — ALWAYS IN PROGRESS</span></section>

      <section className="contact section-pad" id="contact">
        <div className="contact-top"><p className="kicker">HAVE SOMETHING IN MIND?</p><span>04 — 04</span></div>
        <h2>Let's make<br/>something <em>good.</em></h2>
        <div className="contact-bottom"><p>Have a project, a question, or just want to say hello? My inbox is always open.</p><a className="contact-link" href="mailto:hello@alexstyles.com">LET'S TALK <ArrowUpRight size={20}/></a></div>
      </section>
    </main>

    <footer className="footer"><a className="wordmark" href="#top">ALEX<span>®</span></a><span>INDEPENDENT BY NATURE. CURIOUS BY DESIGN.</span><div className="socials"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram/></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin/></a><a href="https://dribbble.com/" aria-label="Dribbble"><Dribbble/></a></div><span>© 2026 ALEX STYLES</span></footer>

    {active && <div className="modal-backdrop" onClick={()=>setActive(null)}><div className="project-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setActive(null)} aria-label="Close"><X/></button><img src={active.image} alt={active.title}/><div className="modal-copy"><span>{active.id} / {active.category} / {active.year}</span><h2>{active.title}</h2><p>{active.description}</p></div></div></div>}
    {sent && <div className="toast">Thanks — your email app is ready! <button onClick={()=>setSent(false)}>×</button></div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
