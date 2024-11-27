import '../dist/styles.css';
import Waving from '../image/waving.png'
import { RiLinkedinBoxLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

const skillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=html,css",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=js,react",
      id: 2,
    }
  ];

function Herosection() {
    return(
        <section id="home" className="hero">
            <div className="container">
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>Front-End React Developer</h1>
                            <img src={Waving} alt="waving_hand" />
                            <p>
                                Hi, I'm Simon Alfonso. A passionate Front-end React
                                Developer based in Philippines. 📍
                            </p>
                            <span>
                                <a
                                    aria-label="linkedin"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/simon-alfonso-b01592309/"
                                >
                                <RiLinkedinBoxLine size={31}/>
                                </a>
                                <a
                                    aria-label="github"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/simonalfonso96"
                                >
                                <TbBrandGithub />
                                </a>
                            </span>
                        </div>
                        <div className="hero-img"></div>
                    </div>

                    {/*  */}
                    <div className="skills">
                        <p>Tech Stack</p>
                        <div className="logos">
                            <ul>
                            {skillsIcons.map((icon) => (
                                <li key={icon.id}>
                                <img src={icon.img} alt="skill-icon" />
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Herosection;