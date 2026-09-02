import Card from "./Card"; 
import ContactEnvelope from "./Contactenvelope";
import SocialLinks from "./Sociallinks";
function Contact() {
  return (
    <>
  <h1> Lets Connect! </h1>
  

   <div style={{ textAlign:"center"}}> 
    <h3 style={{ textAlign: "center", }}> Im currently open to new opportunities </h3>
    <ContactEnvelope />

    <SocialLinks
      github="https://github.com/01110100C"
      linkedin="https://www.linkedin.com/in/taylercaufield/"
      heading="Connect with me on GitHub and LinkedIn"
      marginTop={60}
      />
    
   </div>
 
  
   
    </>
  )
  
  
}

export default Contact