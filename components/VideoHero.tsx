"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !muted;
      videoRef.current.muted = newMuted;
      setMuted(newMuted);
      setShowHint(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rohitnagineni/" },
    { label: "GitHub", href: "https://github.com/rohitnag99" },
    { label: "Email", href: "mailto:nrohit2499@gmail.com" },
  ];

  const skills = [
    "Power BI",
    "Tableau",
    "Azure Data Factory",
    "SQL Server",
    "Databricks",
    "PySpark",
    "DAX",
    "Power Query",
    "SSIS",
    "Python",
    "Microsoft Fabric",
    "Azure Synapse",
  ];

  const projects = [
    {
      title: "Supply Chain Performance Dashboard",
      desc: "Built an end-to-end BI solution tracking global supply chain KPIs using ADF, Azure Synapse, Power BI, DAX, and forecasting models.",
      tags: ["ADF", "Azure Synapse", "Power BI", "DAX"],
    },
    {
      title: "Operational Efficiency Reporting System",
      desc: "Designed near-real-time operational dashboards with 15-minute incremental refresh, fuzzy matching, and anomaly detection.",
      tags: ["Power BI", "DirectQuery", "T-SQL", "Python"],
    },
    {
      title: "Enterprise BI Modernization",
      desc: "Replaced 80+ legacy SSRS reports with consolidated Power BI semantic models, RLS, and automated refresh pipelines.",
      tags: ["Power BI", "SSRS", "SSIS", "SQL Server"],
    },
    {
      title: "Insurance Analytics Platform",
      desc: "Built claims and premium analytics dashboards for underwriting, finance, and actuarial teams using SQL, Power Query, and DAX.",
      tags: ["Power BI", "T-SQL", "ADF", "DAX"],
    },
    {
      title: "Python Data Quality Pipeline",
      desc: "Developed an automated data validation framework using Python, Pandas, and NumPy to clean and flag source anomalies.",
      tags: ["Python", "Pandas", "NumPy", "SQL Server"],
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseBar {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes hintPulse {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.04); }
        }

        .fade-1 { animation: fadeUp 1s ease forwards; opacity: 0; }
        .fade-2 { animation: fadeUp 1s ease 0.2s forwards; opacity: 0; }
        .fade-3 { animation: fadeUp 1s ease 0.4s forwards; opacity: 0; }
        .fade-4 { animation: fadeUp 1s ease 0.6s forwards; opacity: 0; }

        .social-btn:hover,
        .project-card:hover {
          border-color: rgba(59,130,246,0.6) !important;
          transform: translateY(-4px);
          transition: all 0.3s ease;
        }

        .ctrl-btn:hover {
          background: rgba(59,130,246,0.3) !important;
          border-color: rgba(59,130,246,0.6) !important;
          transform: scale(1.08);
          transition: all 0.2s ease;
        }
      `}</style>

      <section style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#000" }}>

        {/* Background blurred ambient video — always muted */}
        <video
          src="/assets/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(24px) brightness(0.25)",
            transform: "scale(1.1)",
            zIndex: 0,
          }}
        />

        {/* Foreground video — audio controlled via ref */}
        <video
          ref={videoRef}
          src="/assets/hero-video.mp4"
          autoPlay
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Gradient overlays */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 3,
          background: "linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.68) 45%, rgba(0,0,0,0.1) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", zIndex: 3,
          background: "linear-gradient(to top, rgba(0,0,0,1), transparent)",
        }} />

        {/* Blue accent line */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", zIndex: 5,
          background: "linear-gradient(to bottom, transparent, #3b82f6, transparent)",
        }} />

        {/* Hero text content */}
        <div style={{
          position: "absolute", left: "5%", top: "50%",
          transform: "translateY(-50%)", zIndex: 6, maxWidth: "760px",
        }}>
          <div className="fade-1" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "32px", height: "1px", background: "#3b82f6" }} />
            <p style={{ color: "#3b82f6", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", margin: 0 }}>
              Sr. Power BI Developer · Data Analyst · Azure BI Systems
            </p>
          </div>

          <h1 className="fade-1" style={heroNameStyle}>ROHIT</h1>
          <h1 className="fade-2" style={{ ...heroNameStyle, color: "rgba(255,255,255,0.22)" }}>NAGINENI</h1>

          <p className="fade-3" style={heroBioStyle}>
            Building enterprise data systems that turn raw information into trusted business decisions across healthcare, insurance, and financial services.
          </p>

          <div className="fade-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            {["Power BI", "Azure", "SQL", "Databricks", "Tableau", "DAX"].map((skill) => (
              <span key={skill} style={pillStyle}>{skill}</span>
            ))}
          </div>

          <div className="fade-4" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.2rem" }}>
            <button onClick={scrollDown} style={primaryButtonStyle}>View Work</button>
            <a href="mailto:nrohit2499@gmail.com" style={secondaryButtonStyle}>Hire Me</a>
          </div>

          <div className="fade-4" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-btn" style={socialStyle}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ✅ Video controls — fixed position so they always show */}
        <div style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.6rem",
          zIndex: 9999,
        }}>
          {/* Tap for sound hint */}
          {showHint && (
            <div style={{
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              padding: "0.4rem 0.8rem",
              borderRadius: "999px",
              animation: "fadeIn 0.5s ease forwards",
              whiteSpace: "nowrap",
            }}>
              🔇 Tap for sound
            </div>
          )}

          <div style={{ display: "flex", gap: "0.6rem" }}>
            <button onClick={togglePlay} className="ctrl-btn" style={controlStyle}>
              {playing ? "⏸" : "▶"}
            </button>
            <button onClick={toggleMute} className="ctrl-btn" style={controlStyle}>
              {muted ? "🔇" : "🔊"}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div onClick={scrollDown} style={scrollStyle}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", margin: 0 }}>
            Scroll
          </p>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #3b82f6, transparent)", animation: "pulseBar 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* About */}
      <section style={sectionDark}>
        <SectionLabel label="About Me" />
        <h2 style={sectionTitle}>BI Developer. Data Analyst. Decision Systems Builder.</h2>
        <p style={paragraphStyle}>
          Sr. Power BI Developer and Data Analyst with 5+ years building enterprise BI solutions across healthcare, insurance, and financial services. I design end-to-end data systems from source ingestion and Azure pipelines to semantic models and self-service dashboards.
        </p>
        <p style={paragraphMuted}>
          Currently expanding into AI-augmented analytics, including LLM integration with BI workflows, predictive modeling, and automated insight generation on top of structured data platforms.
        </p>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "3rem" }}>
          {[
            { number: "5+", label: "Years Experience" },
            { number: "80+", label: "Legacy Reports Modernized" },
            { number: "30+", label: "Hours Saved Monthly" },
            { number: "3", label: "Core Industries" },
          ].map((stat) => (
            <div key={stat.label} style={{ borderLeft: "2px solid #3b82f6", paddingLeft: "1rem" }}>
              <p style={{ color: "#3b82f6", fontSize: "1.8rem", fontWeight: 800, margin: 0 }}>{stat.number}</p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={sectionBlack}>
        <SectionLabel label="Core Stack" />
        <h2 style={sectionTitle}>Tools I Work With</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", maxWidth: "950px" }}>
          {skills.map((skill) => (
            <span key={skill} style={skillStyle}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={sectionDark}>
        <SectionLabel label="Projects" />
        <h2 style={sectionTitle}>Featured Work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: "1150px" }}>
          {projects.map((project) => (
            <div key={project.title} className="project-card" style={projectCardStyle}>
              <div style={{ width: "32px", height: "2px", background: "#3b82f6", marginBottom: "1.5rem" }} />
              <h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.5 }}>{project.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.88rem", lineHeight: 1.7 }}>{project.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.2rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={smallTagStyle}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={sectionBlack}>
        <SectionLabel label="Education" />
        <h2 style={sectionTitle}>Education</h2>
        <div style={{ borderLeft: "2px solid rgba(59,130,246,0.5)", paddingLeft: "1.5rem", maxWidth: "680px" }}>
          <p style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.4rem" }}>M.S. Engineering Management</p>
          <p style={{ color: "rgba(255,255,255,0.48)", margin: 0 }}>University of Alabama at Birmingham</p>
        </div>
      </section>

      {/* Contact */}
      <section style={sectionDark}>
        <SectionLabel label="Contact" />
        <h2 style={sectionTitle}>Let's Build Data Systems That Drive Decisions.</h2>
        <p style={paragraphStyle}>
          Open to data analytics, BI development, Azure data, and enterprise reporting opportunities.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "2rem" }}>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-btn" style={socialStyle}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem 6%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem", margin: 0 }}>
          © 2026 Rohit Nagineni. All rights reserved.
        </p>
        <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.72rem", margin: 0 }}>
          Built with Next.js · Deployed on Vercel
        </p>
      </footer>
    </>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
      <div style={{ width: "24px", height: "1px", background: "#3b82f6" }} />
      <p style={{ color: "#3b82f6", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", margin: 0 }}>{label}</p>
    </div>
  );
}

const heroNameStyle = {
  color: "#ffffff",
  fontSize: "clamp(3.2rem, 8vw, 7.8rem)",
  fontWeight: 900,
  lineHeight: "0.88",
  letterSpacing: "-0.04em",
  margin: "0 0 0.2rem",
};

const heroBioStyle = {
  color: "rgba(255,255,255,0.68)",
  fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
  lineHeight: 1.9,
  maxWidth: "560px",
  marginBottom: "1.5rem",
};

const pillStyle = {
  background: "rgba(59,130,246,0.12)",
  border: "1px solid rgba(59,130,246,0.38)",
  color: "#60a5fa",
  padding: "0.32rem 0.8rem",
  borderRadius: "999px",
  fontSize: "0.7rem",
};

const primaryButtonStyle = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "0.85rem 2rem",
  fontSize: "0.78rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: 700,
  boxShadow: "0 0 30px rgba(37,99,235,0.45)",
};

const secondaryButtonStyle = {
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.25)",
  padding: "0.85rem 2rem",
  fontSize: "0.78rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  borderRadius: "4px",
  textDecoration: "none",
};

const socialStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "rgba(255,255,255,0.72)",
  padding: "0.55rem 1rem",
  borderRadius: "4px",
  textDecoration: "none",
  fontSize: "0.72rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
};

const controlStyle = {
  background: "rgba(20,20,20,0.85)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "1.1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
};

const scrollStyle = {
  position: "absolute" as const,
  bottom: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  zIndex: 10,
};

const sectionDark = {
  backgroundColor: "#0a0a0a",
  padding: "8rem 6%",
  borderTop: "1px solid rgba(255,255,255,0.05)",
};

const sectionBlack = {
  backgroundColor: "#050505",
  padding: "8rem 6%",
  borderTop: "1px solid rgba(255,255,255,0.05)",
};

const sectionTitle = {
  color: "#fff",
  fontSize: "clamp(2rem, 4vw, 3.5rem)",
  fontWeight: 800,
  marginBottom: "2rem",
  lineHeight: 1.1,
};

const paragraphStyle = {
  color: "rgba(255,255,255,0.62)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  maxWidth: "720px",
};

const paragraphMuted = {
  color: "rgba(255,255,255,0.42)",
  fontSize: "0.95rem",
  lineHeight: 1.9,
  maxWidth: "720px",
};

const skillStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "rgba(255,255,255,0.75)",
  padding: "0.75rem 1rem",
  borderRadius: "999px",
  fontSize: "0.82rem",
};

const projectCardStyle = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "2rem",
};

const smallTagStyle = {
  background: "rgba(59,130,246,0.1)",
  border: "1px solid rgba(59,130,246,0.25)",
  color: "#60a5fa",
  padding: "0.2rem 0.6rem",
  borderRadius: "4px",
  fontSize: "0.68rem",
};
