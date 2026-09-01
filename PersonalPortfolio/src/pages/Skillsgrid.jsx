import React from "react";
 
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
 
export default function SkillsGrid({ skills = DEFAULT_SKILLS, iconSize = 30 }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(68px, 1fr))",
        gap: "10px 6px",
      }}
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={`${skill.name} logo`}
            width={iconSize}
            height={iconSize}
            loading="lazy"
            style={{ display: "block" }}
          />
          <span style={{ fontSize: 10, textAlign: "center", color: "black" }}>
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}