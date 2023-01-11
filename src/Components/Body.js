import React, { useContext, useState } from "react";
import { projects } from "../data";
import {
  SiFigma,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiSketch,
} from "react-icons/si";
import { SlNote } from "react-icons/sl";
import { RxBoxModel } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import { HiMail, HiOutlineArrowNarrowDown } from "react-icons/hi";
import { VscSymbolInterface } from "react-icons/vsc";
import { GrLaunch, GrTest } from "react-icons/gr";
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import me from "../Photos/me.png";
import contactme from "../Photos/contact.png";
import "animate.css";
import Fade from "react-reveal/Fade";
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "./Assets/BENEDICTA-RAY-OKOYE-CV.pdf";
import quays from "./Assets/quays.png";
import vinera from "./Assets/vinera.png";
import magenta from "./Assets/magenta.png";
import { AuthContext } from "../helpers/AuthContext";

export const Body = () => {
  const [allProjects, setAllProject] = useState(projects);
  const { isDarkMode, setIsDarkMode } = useContext(AuthContext);

  let darkModeStatus;
  darkModeStatus = localStorage.getItem("dark-mode");

  return (
    <div className="body-container">
      <div className="body-header about-link">
        <h2>About Me...</h2>
      </div>
      <div className="item-container about-container">
        <Fade left cascade>
          <img src={me} alt="about-me" className="about-me-img" />
        </Fade>
        <Fade right cascade>
          <div>
            <p>
              I am a creative designer with a strong understanding of
              user-centered design principles and a passion for creating
              intuitive and visually appealing products. I have major experience
              with prototyping tools such as figma. <br />
              <br /> I have a strong background in design, human-computer
              interaction, and I am able to use this knowledge to inform your
              design decisions. <br />
              <br />I am able to work collaboratively with cross-functional
              teams, including developers, researchers, and product managers, to
              bring designs to life while constantly seeking to learn and stay
              up-to-date with the latest design trends and techniques.
            </p>
            <div className="btn-container">
              <Link
                to="contact-link"
                smooth={true}
                duration={2000}
                spy={true}
                activeClass="active"
                className={
                  darkModeStatus === "enabled"
                    ? "dark-btns"
                    : darkModeStatus === "disabled"
                    ? "light-btns"
                    : "light-btns"
                }
              >
                <p>Contact Me</p>
              </Link>
              <a
                href={resume}
                target="_blank"
                rel="noopener"
                className={
                  darkModeStatus === "enabled"
                    ? "dark-btns"
                    : darkModeStatus === "disabled"
                    ? "light-btns"
                    : "light-btns"
                }
              >
                <p>My Resume</p>
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <div className="item-container projects mini-proj">
        <div
          className={
            isDarkMode
              ? "body-header project-link dark-mode-white"
              : "body-header project-link"
          }
        >
          <h2>Works...</h2>
        </div>
        <div className=" projects-container">
          {allProjects.map((project) => {
            const { id, name, description, tools, img, link } = project;
            return (
              <Fade bottom cascade>
                <div key={id} className="project-container">
                  <img src={img} alt="project" />
                  <h3 className="project-name">{name}</h3>
                  <p>{description}</p>
                  <div className="tools-container">
                    <p className="tools">{tools}</p>
                    <a href={link}>Visit Project</a>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
      <div className="item-container projects max-proj works">
        <div className="body-header">
          <h2>Works...</h2>
        </div>
        <div className="about-container">
          <Fade left cascade>
            <img src={quays} alt="about-me" className="about-me-img" />
          </Fade>
          <Fade right cascade>
            <div>
              <h2>Quays Lagos</h2>
              <p>
                A redesign of the homepage of the website to give it a more
                attractive and user friendly look, which will enable users have
                a better view about the restaurant and their services.
              </p>
              <a href="https://bit.ly/3QnSs9h">Visit Project</a>
            </div>
          </Fade>
        </div>
        <div className="about-container">
          <Fade left cascade>
            <div>
              <h2>Vinera Wine</h2>
              <p>
                A redesign of a wine club homepage. Vinera wine is a club for
                all travelers. Wine lovers/travelers get to purchase variety of
                unique vintage wine and also enjoy the privileges of their paid
                plan.
              </p>
              <a href="https://bit.ly/3VMfZSc">Visit Project</a>
            </div>
          </Fade>
          <Fade right cascade>
            <img src={vinera} alt="about-me" className="about-me-img" />
          </Fade>
        </div>
        <div className="about-container">
          <Fade left cascade>
            <img src={magenta} alt="about-me" className="about-me-img" />
          </Fade>
          <Fade right cascade>
            <div>
              <h2>Magenta College</h2>
              <p>
                A mobile view of a college website (Homepage only). It enables
                New and Old students,teaching and Non-teaching staff get updates
                or information about the school.
              </p>
              <a href="https://bit.ly/3jLVMyv">Visit Project</a>
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom cascade>
        <div className="item-container projects">
          <div className="body-header">
            <h2>Skillsets...</h2>
          </div>
          <div className="skill-list">
            <p>Wireframing</p>
            <p>User-flow</p>
            <p>Prototyping</p>
          </div>
          <div className="skillsets-container">
            <SiFigma />
            <SiAdobexd />
            <SiAdobeillustrator />
            <SiAdobeindesign />
            <SiSketch />
          </div>
          <div className="skill-list">
            <p>Sitemap</p>
            <p>Designing</p>
            <p>Researching</p>
          </div>
        </div>
      </Fade>

      <div className="item-container projects process-link">
        <div className="body-header">
          <h2>My Process...</h2>
        </div>
        <Fade bottom cascade>
          <div className="process-container">
            <div className="process">
              <SlNote className="process-icon" />
              <h3>Define the problem</h3>
              <p>
                Identify the user need or business goal that the design will
                address.
              </p>
            </div>

            <div className="process">
              <TfiSearch className="process-icon" />
              <h3>Conduct research</h3>
              <p>
                Gather information about the target users, their needs and
                goals, and the context in which the product will be used. This
                can include user interviews, surveys, and usability testing.
              </p>
            </div>

            <div className="process">
              <RxBoxModel className="process-icon" />
              <h3>Create a conceptual model</h3>
              <p>
                Develop a mental model of the product and how it will meet the
                user's needs. This includes creating user flows, storyboards,
                and wireframes to visualize the product's functionality.
              </p>
            </div>

            <div className="process">
              <VscSymbolInterface className="process-icon" />
              <h3>Design the interface</h3>
              <p>
                Use visual design principles to create a cohesive, intuitive,
                and attractive interface for the product. This includes creating
                mockups and prototypes to test and refine the design.
              </p>
            </div>

            <div className="process">
              <GrTest className="process-icon" />
              <h3>Test and iterate</h3>
              <p>
                Test the design with users to gather feedback and make
                improvements. This involves conducting usability testing, A/B
                testing, and gathering data from analytics tools.
              </p>
            </div>

            <div className="process">
              <GrLaunch className="process-icon" />
              <h3>Launch and monitor</h3>
              <p>
                Launch the product and continue to monitor and gather data to
                inform future design decisions.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="item-container projects contact-me contact-link">
        <div className="body-header">
          <h2>Contact me...</h2>
        </div>
        <div className="contact-foot about-container">
          <Fade left cascade>
            <img src={contactme} alt="contact-me" />
          </Fade>
          <Fade right cascade>
            <div>
              <p>
                If you have any questions, job openings or projects, please do
                not hesitate to{" "}
                <a
                  href="mailto:bennyrayokoye@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="email-me"
                >
                  Email me
                </a>
                .<br />
                You can also reach me through the links below:
              </p>
              <div className="socials-container">
                <a href="/" target="_blank" rel="noreferrer noopener">
                  <FaInstagram />
                </a>
                <a href="/" target="_blank" rel="noreferrer noopener">
                  <FaLinkedin />
                </a>
                <a href="/" target="_blank" rel="noreferrer noopener">
                  <FaTwitter />
                </a>
                <a href="/" target="_blank" rel="noreferrer noopener">
                  <FaBehance />
                </a>
                <a href="/" target="_blank" rel="noreferrer noopener">
                  <FaDribbble />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
