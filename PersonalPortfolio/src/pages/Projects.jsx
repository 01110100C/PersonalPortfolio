import React from 'react'; 
import Card from "./Card";

function Projects() {
  return (
  <>
  <h1> My Projects </h1>


<div style={{ display: "flex", flexDirection: "row", gap: "75px", flexWrap: "wrap" }}>
  <Card title="Send It">
    <p> Send it is a full stack web application that allows rock climbers
      to log their daily climbs, connect with friends, find local gyms, compete with others, 
      and get personalized training plans. This is an all-in-one application for rock climbers 
      to use to easily have all the tools they need at the palm of their hand. </p>
     <h2> Tech Stack </h2> 
      <ul style={{ color: "black" }}>
        <li> React </li>
        <li> Python </li>
        <li> Supabase </li>
        <li> Redis </li>
      </ul>
  </Card>

  <Card title="Card Counter"> 

  </Card>

  <Card title="Amazon Clone">

  </Card>

</div> 
  
  </>
  )
}

export default Projects