import React, { useState, useEffect } from "react";

export default function AsciiPortrait({
  art,
  speed = 10,
  color = "4fd8ff",
  fontSize = 3,
}) {
  const lines = art.replace(/^\n/, "").split("\n");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= lines.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
   
  }, [art]);

  return (
    <pre
      style={{
        fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
        fontSize,
        lineHeight: 1.05,
        color,
        textAlign: "center",
        margin: "0 auto 20px",
        display: "inline-block",
        whiteSpace: "pre",
      }}
    >
      {lines.slice(0, visibleCount).join("\n")}
    </pre>
  );
}

export const PLACEHOLDER_ART = `
        .-"""""-.
       /         \\
      |  o     o  |
      |     ^     |
       \\   ---   /
        '-.....-'
       /         \\
      /   PHOTO   \\
     /   PENDING   \\
    '---------------'
`;