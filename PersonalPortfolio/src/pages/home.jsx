import Card from "./Card";
function Home() {
  return (
    <>
  <div className = "HomeHeader" style ={{ fontSize: "40px",  }}> Hey, Im Tayler</div>
  <div style={{ fontSize: "20px", marginBottom: "60px", }}> And this is my portfolio. </div>
  
  <div style={{ display: "flex", flexDirection: "row", gap: "75px", flexWrap: "wrap" }}>
  <Card title="ABOUT ME"> 
      
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
      <li> Computer Hardware </li>
    </ul>
  </Card>
 </div> 
   </>
  )
}

export default Home