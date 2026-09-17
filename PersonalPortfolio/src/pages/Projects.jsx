import React from 'react'; 
import Card from "./Card";

function Projects() {
  return (
  <>
  <h1> My Projects </h1>


<div style={{ display: "flex", flexDirection: "row", gap: "75px", flexWrap: "wrap" }}>
  <Card title="Send It">
    <p style={{ color: "black" }}> Send it is a full stack web application that allows rock climbers
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
    <p style={{ color: "black" }}> This project includes a raspberry pi, pi camera, openCV, and python. 
      I created a website that live streams the camera and when cards are dealt in front of the camera, it can reconize the suit and 
      value of the card. The software keeps track of which cards have been shown and keep a running count. You can enter how many decks are in the 
      hand so it can more accurately keep track of the cards being shown. I used python and inputted images of the suits and values.  </p>

  </Card>

  <Card title="Amazon Clone">

  </Card>

</div> 
  
  </>
  )
}

export default Projects