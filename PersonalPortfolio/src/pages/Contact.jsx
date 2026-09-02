import Card from "./Card"; 
import ContactEnvelope from "./Contactenvelope";
function Contact() {
  return (
    <>
  <h1> Lets Connect! </h1>
  

   <div style={{ textAlign:"center"}}> 
    <h3 style={{ textAlign: "center", }}> Im currently open to new opportunities </h3>
    <ContactEnvelope />
   </div>
  <div> 
    
      <ul> 
        <li> Email: taylercaufield@gmail.com</li>
        <li>  LinkedIn: https://www.linkedin.com/in/taylercaufield/ </li>
        <li>  GitHub: https://github.com/01110100C </li>
      </ul>
    
  </div>

    </>
  )
  
  
}

export default Contact