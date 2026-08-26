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
    </div>
  )
}

