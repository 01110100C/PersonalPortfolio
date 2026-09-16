import Card from "./Card";
import Skillsgrid from "./Skillsgrid"; 
import AsciiPortait from "./Asciiportait";
import {  MY_ASCII_ART  } from "./MyAsciiArt";

function Home() {
  return (
    <>
   <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <div>
          <div className="HomeHeader" style={{ fontSize: "50px", textAlign: "center", fontFamily: "IBM Plex Sans, monospace" }}> Tayler Caufield</div>
          <div style={{ fontSize: "20px", textAlign: "center", fontFamily: "IBM Plex Sans, sans-serif" }}> Software Developer </div>
        </div>

        <AsciiPortait art={MY_ASCII_ART} speed={25} />
      </div>
  <div style={{ display: "flex", flexDirection: "row", gap: "75px", flexWrap: "wrap" }}>
  <Card title="ABOUT ME"> 
    <p style={{ color: "black "}}> Im a full-stack developer interested in building web and mobile apps with an interest in computer hardware. 
      I enjoy learning new technologies and building projects that challenge me to grow as a developer. I have a passion for problem solving 
      and enjoy working on projects that require creative solutions. I like to build prjects that help solve real world problems and can make peoples 
      lives easier and more convient. Im always trying to learn new technologies and improve my skills as a software engineer. 
    </p>
      
  </Card>

  <Card title="MY SKILLS">
    <Skillsgrid />
  </Card>

  <Card title="HOBBIES">
    <ul style={{ color: "black" }}> 
      <li> Rock Climbing </li>
      <li> Gaming </li>
      <li> Hiking </li>
      <li> Bowling </li>
      <li> Computer Hardware </li>
    </ul>
  </Card>

  <Card title="EDUCATION AND CERTIFICATIONS">
    <ul style={{ color: "black" }}> 
      <li> Bachelors of Science in Software Development </li>
      <li> AWS Certified Cloud Practitioner </li>
    </ul> 
  </Card> 
 </div> 
   </>
  )
}

export default Home