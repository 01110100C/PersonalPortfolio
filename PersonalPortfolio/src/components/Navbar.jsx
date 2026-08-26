import { useRef, useEffect, useState } from 'react';

export default function Navbar() {
  const [blink, setBlink] = useState(true);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  const links = [ 
    { id: 'home', label: 'HOME' },
    { id: 'Resume', label: 'RESUME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return ( 
    <div style={{ fontFamily: "'VT323', monospace"}}> 
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        .crt-glow { text-shadow: 0 0 4px #5b8dd6, 0 0  10px #5b8dd655; }
        .scanline-bg { 
        background-image: repeating-linear-gradient( 
        0deg, rbga(91, 141, 214, 0.04) 0px, rbga(91, 141, 214, 0.04) 1px, tranpsarent 1px, transperent 2px);}

        .nav-link { 
        position: relative; 
        transition: color 0.15s ease; 
        }

        .nav-link:hover { color: #5b8dd6 !important; }
        .nav-link::before { 
        content: '>'; 
        opacity: 0; 
        margin-right: 4px; 
        transition: opacity 0.15s ease; 
        }

        .nav-link:hover::before, 
        .nav-link.active:::before { opacity: 1; }

        `}
      </style>

      <nav className="scanline-bg" style={{ 
        backgroundColor: "#000",
        borderBottom: "2px solid #3a5d8f", 
        padding: "12px 16px", 
        }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          {/* Logo */}
          <div className="crt-glow" style={{ color: "#5b8dd6", fontSize: "24px", letterSpacing: "0.15em", whiteSpace: "nowrap" }}>
            {">"}
            <span style={{ opacity: blink ? 1 : 0 }}>_</span>
          </div>

      <ul style={{ display: "flex", gap: "24px", fontSize: "20px", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((link) => (
          <li key={link.id}>
            <button 
            onClick={() => setActive(link.id)}
            className={`nav-link ${active === link.id ? "active crt-glow" : ""}`}
            style={{
            color: active === link.id ? "#5b8dd6" : "#3a5d8f",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "inherit",
                }}
            >
              {link.label}
            </button>
          </li>
        ))}
        </ul>
        </div>
      </nav>
    </div>
  )
}

