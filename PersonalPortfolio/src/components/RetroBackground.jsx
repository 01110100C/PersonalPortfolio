import React from "react";

const THEMES = { 
    green: { glow: "#39ff6a", dim: "#0d2b12", bg: "#050a06"}, 
    amber: { glow: "#ffb347", dim: "#2b12c08", bg: "#0a0704"},
    blue:  { glow: "#4fd8ff", dim: "#08202b", bg: "#040a0d"}, 
    dimblue: { glow: "#64b5ff", dim: "#101f30", bg: "#070c14"},
}; 

const CASTING = {
    beigeMac: { 
        top: "#e4dcc8",
        mid: "#cdc3a8", 
        bottom: "#b4a889", 
        well: "#3a3628", 
        wellShadow: "#57503c",
        trimText: "#6b6252", 
        screwFace: "#a89f88", 
        screwShade: "#6b6350"
    }, 

    classic: {
        top: "#e8e2d4",
        mid: "#d3ccbb", 
        bottom: "#c2baa6", 
        well: "#100f0d", 
        wellShadow: "#47443c",
        trimText: "#6b6455", 
        screwFace: "#9c9690", 
        screwShade: "#4a4640"
    }, 

}; 

function Screw({ face, shade }) { 
    return(
        <div 
            style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: 'radial-gradient(circle at 35% 35%, ${face}, ${shade} 55%, #33303a 100%)',
                boxShadow: "inset 0 0 0 1px #2a2822, 0 1px 1px rbga(0,0,0,0.6)",
                position: "relative",
                flexShrink: 0,
            }}
        >   
        <div 
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 6,
                height: 1,
                background: "#2c2a27", 
                transform: "translate(-50%, -50%) rotate(35deg)",

            }}
        />
        </div>      
    ); 
}

export default function RetroBackground({
         
        theme = "dimblue", 
        scanlines = true, 
        flicker = true,
        noise = true,
        bezel = true, 
        casting = "beigeMac", 
        label = "MACINTOCH",
        children,
}) { 
    const colors = THEMES[theme] || THEMES.dimblue;
    const shell = CASTING[casting] || CASTING.beigeMac;

    const screenEffects = ( 
        <>
            <div 
                style={{
                    position: "absolute",
                    inset: 0,
                    background: 'radial-gradient(ellipse at 50% 40%, ${colors.glow}22 0%, transparent 60%)',
                    pointerEvents: "none",
                    animation: flicker ? "rcbFlicker 6s infinite" : "none",
                }}
            />
            {scanlines && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "repeating-linear-gradient(to bottom, rbga(0,0,0,0.35) 1px, transparent 2px, transparent 3px)",
                        mixBlendMode: "multiply",
                        pointerEvents: "none",
                    }}
                />
            )}
            <div 
                style={{
                    position: "absolute",
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, ${colors.glow}14 50%, transparent 100%)',
                    height: "12%", 
                    animation: "rcbScanbar 7s linear infinite", 
                    pointerEvents: "none",
                }}
            />  
            {noise && (
                <svg 
                    style ={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0.05, 
                        pointerEvents: "none",
                    }}
                >
                  <filter id="rcbNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#rcbNoise)" />
                </svg>
            )}

            <div 
                style={{
                    position: "absolute",
                    inset: 0,
                    boxShadow: "inset 0 0 140px 40px rbga(0,0,0,0.85)", 
                    pointerEvents: "none",
                }}
            />
        </>
    ); 

    if (!bezel) {
        return (
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflowY: "auto",
          background: `radial-gradient(ellipse at center, ${colors.dim} 0%, ${colors.bg} 70%, #000 100%)`,
          fontFamily: '"Courier New", ui-monospace, monospace',
          color: colors.glow,
        }}
      >
        {screenEffects}
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        <style>{`
          @keyframes rcbFlicker { 0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:.85} 94%{opacity:1} 96%{opacity:.92} 97%{opacity:1} }
          @keyframes rcbScanBar { 0%{transform:translateY(-20%)} 100%{transform:translateY(120vh)} }
        `}</style>
      </div>
    );
}

 return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        background: "#1b1a17",
        padding: "clamp(10px, 2vh, 26px) clamp(10px, 2vw, 26px)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1600,
          display: "flex",
          flexDirection: "column",
        }}
      >
      
        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            background: `linear-gradient(180deg, ${shell.top} 0%, ${shell.mid} 60%, ${shell.bottom} 100%)`,
            borderRadius: 10,
            padding: "18px 18px 16px",
            boxShadow:
              "0 24px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -4px 8px rgba(0,0,0,0.18)",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
        
          <div style={{ position: "absolute", top: 8, right: 22, display: "flex", gap: 3 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: 2,
                  height: 10,
                  background: shell.bottom,
                  boxShadow: `inset 0 0 0 1px ${shell.wellShadow}55`,
                }}
              />
            ))}
          </div>
 
         
          <div style={{ position: "absolute", top: 9, left: 9 }}>
            <Screw face={shell.screwFace} shade={shell.screwShade} />
          </div>
          <div style={{ position: "absolute", bottom: 9, left: 9 }}>
            <Screw face={shell.screwFace} shade={shell.screwShade} />
          </div>
          <div style={{ position: "absolute", bottom: 9, right: 9 }}>
            <Screw face={shell.screwFace} shade={shell.screwShade} />
          </div>
 
         
          <div
            style={{
              flex: 1,
              minHeight: 0,
              display: "flex",
              background: shell.well,
              borderRadius: 8,
              padding: 12,
              boxShadow: `inset 0 0 0 2px ${shell.wellShadow}, inset 0 8px 20px rgba(0,0,0,0.85)`,
            }}
          >
            <div
              style={{
                position: "relative",
                flex: 1,
                minHeight: 0,
                borderRadius: 6,
                overflow: "hidden",
                boxShadow: "0 0 0 1px #000",
                background: `radial-gradient(ellipse at center, ${colors.dim} 0%, ${colors.bg} 70%, #000 100%)`,
                fontFamily: '"Courier New", ui-monospace, monospace',
              }}
            >
              {screenEffects}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  overflowY: "auto",
                  color: colors.glow,
                }}
              >
                {children}
              </div>
            </div>
          </div>
 
          <div
            style={{
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 6px",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: '"Courier New", ui-monospace, monospace',
                fontSize: 13,
                letterSpacing: "0.14em",
                color: shell.trimText,
                fontWeight: "bold",
              }}
            >
              {label}
            </span>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: colors.glow,
                boxShadow: `0 0 6px 2px ${colors.glow}99`,
              }}
            />
          </div>
        </div>
      </div>
 
      <style>{`
        @keyframes rcbFlicker { 0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:.85} 94%{opacity:1} 96%{opacity:.92} 97%{opacity:1} }
        @keyframes rcbScanBar { 0%{transform:translateY(-20%)} 100%{transform:translateY(120vh)} }
      `}</style>
    </div>
  );
}
 
export function RetroNavBar({
  title = "Tayler Caufield",
  tabs = [],
  activeIndex = 0,
  onSelect = () => {},
  theme = "dimblue",
}) {
  const colors = THEMES[theme] || THEMES.dimblue;
 
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "10px 18px",
        borderBottom: `1px solid ${colors.glow}44`,
        background: `${colors.bg}dd`,
        backdropFilter: "blur(2px)",
        fontFamily: '"Courier New", ui-monospace, monospace',
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontSize: 13,
          letterSpacing: "0.08em",
          color: colors.glow,
          opacity: 0.85,
          whiteSpace: "nowrap",
        }}
      >
        {title}_
      </span>
 
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {tabs.map((tab, i) => {
          const active = i === activeIndex;
          return (
            <button
              key={tab}
              onClick={() => onSelect(i)}
              style={{
                background: active ? `${colors.glow}22` : "transparent",
                color: colors.glow,
                border: `1px solid ${colors.glow}${active ? "aa" : "33"}`,
                borderRadius: 2,
                padding: "6px 14px",
                fontFamily: '"Courier New", ui-monospace, monospace',
                fontSize: 13,
                letterSpacing: "0.04em",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {active ? `[ ${tab} ]` : tab}
            </button>
          );
        })}
      </div>
    </nav>
  );
}