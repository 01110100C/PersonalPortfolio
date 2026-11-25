import Card from "./Card";
import "./Projects.css";

const PROJECTS = [
  {
    title: "POLL PAL",
    status: "Meta Global AI Hackathon 2026",
    summary:
      "A civic-tech web app built with a teammate for the 2026 Meta Global AI Developer Hackathon. Poll Pal helps voters see which elections are coming up, what they need to do, and where and when to vote.",
    highlights: [
      "Built the React front end and connected it to an Express and Supabase backend, including full-address lookup to surface relevant local, county, state, and federal elections.",
      "Developed an interactive ballot map using Mapbox that shows the nearest ballot drop-off locations.",
      "Integrated Meta's Muse Spark model to translate the interface and ballot information, and built a side-by-side candidate comparison view.",
      "Implemented user profiles, friend requests, an \"I Voted\" feature, and email reminders for registration and ballot deadlines.",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Supabase", "PostgreSQL", "Mapbox", "Meta Muse Spark"],
    link: "https://github.com/albertcastillom/PollPalMetaHackathon",
  },
  {
    title: "SEND IT",
    status: "In Progress",
    summary:
      "A full-stack mobile and web app for rock climbers that brings climb logging, progress tracking, social features, and personalized training into one place.",
    highlights: [
      "Designed and built features that let climbers log climbs, track progress over time, and connect with friends.",
      "Integrated an LLM-powered assistant that generates personalized training plans from a user's climbing history, grades, and goals.",
      "Designed a relational PostgreSQL schema in Supabase for climb logs, user profiles, and friend connections.",
    ],
    stack: ["React Native", "Supabase", "PostgreSQL", "OpenAI"],
    link: "https://github.com/01110100C/SENDIT",
  },
  {
    title: "CARD COUNTER",
    status: "Complete",
    summary:
      "A real-time computer vision system running on a Raspberry Pi that recognizes playing cards from a live camera feed and keeps a running count.",
    highlights: [
      "Built a recognition pipeline that identifies the rank and suit of cards as they are dealt, streamed to a web interface.",
      "Used OpenCV for image preprocessing and contour detection, reaching 97% recognition accuracy.",
      "Implemented a running-count algorithm that updates automatically and adjusts for the number of decks in play.",
    ],
    stack: ["Python", "OpenCV", "Raspberry Pi", "Pi Camera"],
    link: "https://github.com/01110100C/Card-Counter",
  },
];

function Projects() {
  return (
    <div className="home">
      <header className="home-hero">
        <h1 className="home-hero__name">Projects</h1>
        <div className="home-hero__role">
          THINGS I&apos;VE BUILT
          <span className="home-hero__cursor" aria-hidden="true">&nbsp;</span>
        </div>
      </header>

      <div className="project-list">
        {PROJECTS.map((project) => (
          <Card key={project.title} title={project.title}>
            <div className="project">
              <span className="project__status">{project.status}</span>
              <p className="project__summary">{project.summary}</p>

              <h3 className="project__label">Highlights</h3>
              <ul className="project__highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className="project__label">Tech Stack</h3>
              <ul className="project__stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <a
                className="project__link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub &gt;
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
