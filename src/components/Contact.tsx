import githubImage from "../assets/github-logo.png";
import linkedinImage from "../assets/LinkedIn_logo.png";

const Contact = () => {
  return (
    <>
      <h2 className="section-title">Contact</h2>
      <section className="contact-section">
            <a href="https://www.linkedin.com/in/peter-lindberg-6a005b23a/" target="_blank" rel="noreferrer">
              <img src={linkedinImage} alt="Linkedin" />
            </a>
  
            <a href="https://github.com/PeterWesselLindberg" target="_blank" rel="noreferrer">
              <img src={githubImage} alt="GitHub" />
            </a>
      </section>
    </>
  )
}

export default Contact