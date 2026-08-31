import Card from "./Card"; 
import { MdEmail } from "reat-icons/md"; 
import { FaPhoneAlt } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa"; 
function Contact() {
  return (
    <>
  <h1> Lets Connect! </h1>
  <h2> Im currently open to new opportunities. </h2>
  <div> 
    <Card> 
      <ul> 
        <li> <MdEmail /> Email: taylercaufield@gmail.com</li>
        <li> <FaPhoneAlt /> Phone: (509)366-2478 </li>
        <li> <FaLinkedin /> LinkedIn: https://www.linkedin.com/in/taylercaufield/ </li>
        <li> <FaGithub /> GitHub: https://github.com/01110100C </li>
      </ul>
    </Card>
  </div>

    </>
  )
  
  
}

export default Contact