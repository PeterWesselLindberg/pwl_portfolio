 import heroImage from "../assets/cv_billed_j1_kopi.jpg";

function Hero() {
  return (

    <section 
      className="snap-section hero-section"
      >
      <div className="hero-content">
        <img
          src={heroImage}
          alt="Profile"
          className="hero-image"
        />
        <h1>Peter Wessel Lindberg</h1>
        <div className="full-divider"/>
        
        <div className="large-font_size">
          <p>Master's graduate in Computer Science</p>
        </div>
      </div>
    </section>
  )
}

export default Hero