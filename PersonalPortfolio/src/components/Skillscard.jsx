import React from "react";
 
const THEMES = {
  green: { glow: "#39ff6a", dim: "#0d2b12", bg: "#050a06" },
  amber: { glow: "#ffb347", dim: "#2b1c08", bg: "#0a0704" },
  blue: { glow: "#4fd8ff", dim: "#08202b", bg: "#040a0d" },
  dimblue: { glow: "#6f9bd6", dim: "#101f30", bg: "#070c14" },
};
 
// icon ids match https://skillicons.dev — a free, no-signup icon CDN built for exactly this use case
const DEFAULT_SKILLS = [
  { name: "Java", icon: "java" },
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "js" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "C++", icon: "cpp" },
  { name: "Python", icon: "py" },
  { name: "SQL", icon: "mysql" },
  { name: "MySQL", icon: "mysql" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "Redis", icon: "redis" },
  { name: "AWS", icon: "aws" },
  { name: "Azure", icon: "azure" },
];
 
export default function SkillsCard({
  theme = "dimblue",
  title = "SKILLS.SYS",
  skills = DEFAULT_SKILLS,
}) {
  const colors = THEMES[theme] || THEMES.dimblue;
 
  return (
    <div
      style={{
        border: `1px solid ${colors.glow}55`,
        borderRadius: 6,
        background: `${colors.dim}66`,
        boxShadow: `0 0 0 1px ${colors.bg}, inset 0 0 24px ${colors.glow}0d`,
        fontFamily: '"Courier New", ui-monospace, monospace',
        color: colors.glow,
        overflow: "hidden",
      }}
    >
      {/* title bar, like a terminal window header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderBottom: `1px solid ${colors.glow}33`,
          background: `${colors.glow}11`,
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: `${colors.glow}88` }} />
        <span style={{ fontSize: 12, letterSpacing: "0.1em", opacity: 0.9 }}>{title}</span>
      </div>
 
      {/* skill grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(84px, 1fr))",
          gap: 14,
          padding: "20px 18px",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              padding: "10px 6px",
              borderRadius: 4,
              border: `1px solid ${colors.glow}22`,
              background: `${colors.bg}66`,
              transition: "border-color 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${colors.glow}aa`;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${colors.glow}22`;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={`${skill.name} logo`}
              width={36}
              height={36}
              loading="lazy"
              style={{ display: "block" }}
            />
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.02em",
                textAlign: "center",
                opacity: 0.9,
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}