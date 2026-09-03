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