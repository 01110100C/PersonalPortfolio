import Card from "./Card";
function Home() {
  return (
    <>
  <div className = "HomeHeader" style ={{ fontSize: "40px",  }}> Hey, Im Tayler</div>
  <div style={{ fontSize: "20px", marginBottom: "60px", }}> And this is my portfolio. </div>
  
  <div style={{ display: "flex", flexDirection: "row", gap: "75px", flexWrap: "wrap" }}>
  <Card title="ABOUT ME"> 
     Im currently in my last quarter of my bachelors degree for Software Development. 
     I enjoy building full stack web and mobile applications. Im working as a data center technician at AWS where i get to work
     hands on with networking, troubleshooting, scripts, and computer hardware. 
  </Card>
  <Card title="TECH STACK">
    <ul>
   <li> Frontend: </li>
   <li> Backend: </li>
   <li> Tools: </li>
    </ul> 
  </Card>
  <Card title="HOBBIES">
    <ul> 
      <li> Rock Climbing </li>
      <li> Gaming </li>
      <li> Hiking </li>
      <li> Bowling </li>
    </ul>
  </Card>
 </div> 
   </>
  )
}

export default Home