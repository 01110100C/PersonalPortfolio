import Card from "./Card";
import Skillsgrid from "./Skillsgrid";
import PixelSprite from "./PixelSprite";

const HOBBIES = [
  { name: "Rock Climbing", sprite: "climbing", caption: "Problem solving, but vertical." },
  { name: "Gaming", sprite: "gaming", caption: "Press START to continue." },
  { name: "Hiking", sprite: "hiking", caption: "Trails, peaks, and fresh air." },
  { name: "Bowling", sprite: "bowling", caption: "Always chasing the strike." },
  { name: "Computer Hardware", sprite: "hardware", caption: "Building and tinkering with PCs." },
];

const EDUCATION = [
  { tag: "DEGREE", title: "B.S. in Software Development" },
  { tag: "CERT", title: "AWS Certified Cloud Practitioner" },
];

function Home() {
  return (
    <div className="home">
      <header className="home-hero">
        <h1 className="home-hero__name">Tayler Caufield</h1>
        <div className="home-hero__role">
          SOFTWARE DEVELOPER
          <span className="home-hero__cursor" aria-hidden="true">&nbsp;</span>
        </div>
      </header>

      <div className="home-grid">
        <Card title="ABOUT ME">
          <p className="about-text">
            I'm a full-stack developer who builds web and mobile apps, with a
            soft spot for computer hardware. I like projects that solve
            real-world problems and make people's lives easier.
          </p>
          <p className="about-text">
            I'm happiest when a problem needs a creative solution, and I'm
            always picking up new technologies to keep growing as a software
            engineer.
          </p>
        </Card>

        <Card title="SKILLS">
          <Skillsgrid />
        </Card>

        <Card title="HOBBIES" className="home-grid__wide">
          <div className="hobby-grid">
            {HOBBIES.map((hobby) => (
              <div key={hobby.name} className="hobby">
                <div className="hobby__screen">
                  <PixelSprite sprite={hobby.sprite} size={64} title={hobby.name} />
                </div>
                <div className="hobby__name">{hobby.name}</div>
                <div className="hobby__caption">{hobby.caption}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="EDUCATION" className="home-grid__wide">
          <ul className="edu-list">
            {EDUCATION.map((item) => (
              <li key={item.title} className="edu-item">
                <span className="edu-item__tag">{item.tag}</span>
                <span className="edu-item__title">{item.title}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default Home;
