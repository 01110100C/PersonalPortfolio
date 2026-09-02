import React from "react";

const PLATFORMS = [
  { key: "github", label: "GitHub", icon: "github" },
  { key: "linkedin", label: "LinkedIn", icon: "linkedin" },
];
 
export default function SocialLinks({
  github,
  linkedin,
  iconSize = 70,
  heading = "Connect with me on GitHub and LinkedIn",
  marginTop = 60,
}) {
  const urls = { github, linkedin };
 
  return (
    <div style={{ marginTop, textAlign: "center" }}>
      {heading && (
        <h3
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          {heading}
        </h3>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          padding: "8px 0",
        }}
      >
      {PLATFORMS.map(({ key, label, icon }) => {
        const url = urls[key];
        if (!url) return null; // skip rendering if no link was provided
 
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${label} logo`}
              width={iconSize}
              height={iconSize}
              loading="lazy"
              style={{ display: "block" }}
            />
            <span style={{ fontSize: 12 }}>{label}</span>
          </a>
        );
      })}
      </div>
    </div>
  );
}