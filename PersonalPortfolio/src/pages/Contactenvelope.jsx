import React, { useState } from "react";
export default function ContactEnvelope({
  emailAddress = "taylercaufield@gmail.com",
  accent = "#4a90d9",
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setOpen(false);
    setForm({ name: "", email: "", message: "" });
  };
 
  return (
    <div style={{ fontFamily: "inherit" }}>
      {/* envelope + peeking paper, click to open the form */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open contact form"
          style={{
            position: "relative",
            width: 220,
            height: 150,
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
          }}
        >
          {/* paper, positioned behind/above the envelope flap */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 150,
              height: 110,
              background: "#f7f4ec",
              border: "1px solid #d8d2c0",
              borderRadius: "2px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: 14,
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#2b2b2b",
                fontFamily: '"Courier New", ui-monospace, monospace',
              }}
            >
              EMAIL ME HERE
            </span>
          </div>
 
          {/* envelope body */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 220,
              height: 110,
              background: "#e3e6ea",
              border: "1px solid #b7bcc2",
              borderRadius: 4,
              boxShadow: "0 6px 14px rgba(0,0,0,0.3)",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            {/* bottom shading */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.06) 100%)",
              }}
            />
          </div>
 
          {/* envelope flap, triangular, sits on top of the envelope body,
              in front of the paper's bottom half to look like it's tucked in */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 0,
              width: 0,
              height: 0,
              borderLeft: "110px solid transparent",
              borderRight: "110px solid transparent",
              borderTop: "70px solid #cfd3d8",
              filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.25))",
              zIndex: 3,
            }}
          />
 
          <span
            style={{
              position: "absolute",
              bottom: -22,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 11,
              letterSpacing: "0.05em",
              color: accent,
              whiteSpace: "nowrap",
              fontFamily: '"Courier New", ui-monospace, monospace',
            }}
          >
            click to open
          </span>
        </button>
      )}
 
      {/* contact form, replaces the envelope once opened */}
      {open && (
        <form
          onSubmit={handleSend}
          style={{
            width: 260,
            background: "#f7f4ec",
            border: "1px solid #d8d2c0",
            borderRadius: 6,
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            padding: 18,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontFamily: '"Courier New", ui-monospace, monospace',
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", color: "#2b2b2b" }}>
              EMAIL ME
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close contact form"
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 14,
                color: "#666",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>
 
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            style={{
              padding: "8px 10px",
              fontSize: 13,
              border: "1px solid #cfc9b8",
              borderRadius: 3,
              fontFamily: "inherit",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = accent)}
            onBlur={(e) => (e.target.style.borderColor = "#cfc9b8")}
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            style={{
              padding: "8px 10px",
              fontSize: 13,
              border: "1px solid #cfc9b8",
              borderRadius: 3,
              fontFamily: "inherit",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = accent)}
            onBlur={(e) => (e.target.style.borderColor = "#cfc9b8")}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            rows={4}
            style={{
              padding: "8px 10px",
              fontSize: 13,
              border: "1px solid #cfc9b8",
              borderRadius: 3,
              fontFamily: "inherit",
              outline: "none",
              resize: "vertical",
            }}
            onFocus={(e) => (e.target.style.borderColor = accent)}
            onBlur={(e) => (e.target.style.borderColor = "#cfc9b8")}
          />
 
          <button
            type="submit"
            style={{
              marginTop: 4,
              padding: "9px 12px",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#fff",
              background: accent,
              border: "none",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            SEND
          </button>
        </form>
      )}
    </div>
  );
}