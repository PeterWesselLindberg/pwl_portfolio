// import heroBg from "../assets/hero-bg.jpg";

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
      {/* <div className="hero-content">
        <img
          src={heroImage}
          alt="Profile"
          className="hero-image"
        /> */}
      <div className="section-content">
        <h1>Hej, jeg hedder xomiz</h1>
        <p>Frontend Developer</p>
      </div>
    </section>
  )
}

export default Hero