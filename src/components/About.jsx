import AboutImg from "../image/img.png";
import RoundedText from "../image/text2.svg";
import WorkingEmoji from "../image/working.png";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Front-end Developer based in Philippines 📍
              </h4>
              <p>
                Hey, my name is Simon, and I'm a Frontend Developer. My passion
                is to create and develop a clean UI/UX for my users.
                <br />
                <br />
                My main stack currently is React.js in combination with
                CSS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;