import Card from "./Card";
import ContactEnvelope from "./Contactenvelope";
import SocialLinks from "./Sociallinks";
import "./Contact.css";

function Contact() {
  return (
    <div className="home">
      <header className="home-hero">
        <h1 className="home-hero__name">Let&apos;s Connect!</h1>
        <div className="home-hero__role">
          OPEN TO NEW OPPORTUNITIES
          <span className="home-hero__cursor" aria-hidden="true">&nbsp;</span>
        </div>
      </header>

      <div className="contact">
        <Card title="GET IN TOUCH">
          <div className="contact__body">
            <p className="contact__intro">
              Have a question, an opportunity, or just want to say hi? Open the
              envelope to send me an email.
            </p>

            <ContactEnvelope />

            <SocialLinks
              github="https://github.com/01110100C"
              linkedin="https://www.linkedin.com/in/taylercaufield/"
              heading="Find me on GitHub and LinkedIn"
              marginTop={48}
              iconSize={56}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
