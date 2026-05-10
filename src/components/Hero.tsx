 import heroImage from "../assets/cv_billed_j1_kopi.jpg";

function Hero() {
  return (
    // <section>

    //   <div>
    //     <h1>Hej, jeg hedder xomiz</h1>
    //     <p>Frontend Developer</p>
    //   </div>
    // </section>

    <section 
      className="snap-section hero-section"
      // style={{
      //   backgroundImage: `url(${heroBg})`,
      // }}
      >
      <div className="hero-content">
        <img
          src={heroImage}
          alt="Profile"
          className="hero-image"
        />
      {/* </div> */}
      {/* <div className="section-content"> */}
        <h1>Peter Wessel Lindberg</h1>
        <div className="full-divider"/>
        
        <div className="large-font_size">
          <p>Full Stack Developer</p>
        </div>
      </div>
    </section>
  )
}

export default Hero