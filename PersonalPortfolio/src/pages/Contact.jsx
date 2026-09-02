import Card from "./Card"; 
import ContactEnvelope from "./Contactenvelope";
import SocialLinks from "./Sociallinks";
function Contact() {
  return (
    <>
  <h1 style={{ fontSize: 65, fontFamily: "IBM Plex Sans, sans-serif" }}> Lets Connect! </h1>
  <h3 style={{ fontFamily: "IBM Plex Sans, sans-serif" }} > Im currently open to new opportunities </h3>

   <div style={{ textAlign:"center", fontFamily: "'IBM Plex Sans', sans-serif",}}> 
  
    <ContactEnvelope />

    <SocialLinks
      github="https://github.com/01110100C"
      linkedin="https://www.linkedin.com/in/taylercaufield/"
      />
    
   </div>
 
  
   
    </>
  )
  
  
}

export default Contact