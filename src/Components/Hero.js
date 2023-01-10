import React, { useState } from "react";
import { HiOutlineArrowNarrowDown, HiOutlineMenuAlt3 } from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";
import Typewriter from "typewriter-effect";
import { Link, animateScroll as scroll } from "react-scroll";
import "animate.css";
import Fade from "react-reveal/Fade";

export const Hero = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="hero-container">
      <div className={toggleMenu ? "menu show-menu" : "menu"}>
        <Link
          to="App"
          smooth={true}
          duration={2000}
          spy={true}
          activeClass="active"
        >
          <p
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            Home
          </p>
        </Link>
        <Link
          to="about-link"
          smooth={true}
          duration={2000}
          spy={true}
          activeClass="active"
        >
          <p
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            About Me
          </p>
        </Link>
        <Link
          to="project-link"
          smooth={true}
          duration={2000}
          spy={true}
          activeClass="active"
        >
          <p
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            Projects
          </p>
        </Link>
        <Link
          to="process-link"
          smooth={true}
          duration={2000}
          spy={true}
          activeClass="active"
        >
          <p
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            Process
          </p>
        </Link>
        <Link
          to="contact-link"
          smooth={true}
          duration={2000}
          spy={true}
          activeClass="active"
        >
          <p
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            Contact
          </p>
        </Link>
      </div>
      <nav className="small-nav">
        <h1>R-O B</h1>
        <HiOutlineMenuAlt3
          className="btn-menu"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
      </nav>

      <nav className="full-nav">
        <h1>R-O B</h1>

        <div className="lists">
          <Link
            to="App"
            smooth={true}
            duration={2000}
            spy={true}
            activeClass="active"
          >
            <p
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Home
            </p>
          </Link>
          <Link
            to="about-link"
            smooth={true}
            duration={2000}
            spy={true}
            activeClass="active"
          >
            <p
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              About Me
            </p>
          </Link>
          <Link
            to="works"
            smooth={true}
            duration={2000}
            spy={true}
            activeClass="active"
          >
            <p
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Projects
            </p>
          </Link>
          <Link
            to="process-link"
            smooth={true}
            duration={2000}
            spy={true}
            activeClass="active"
          >
            <p
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Process
            </p>
          </Link>
          <Link
            to="contact-link"
            smooth={true}
            duration={2000}
            spy={true}
            activeClass="active"
          >
            <p
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              Contact
            </p>
          </Link>
        </div>
      </nav>
      <Fade top cascade>
        <h1 className="intro">
          Hi, I'm <span className="name">Benedicta</span>{" "}
        </h1>
      </Fade>

      <HiOutlineArrowNarrowDown />

      <h2 className="hero-typewriter">
        I{" "}
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Design")
              .pauseFor(1500)
              .deleteChars(6)
              .typeString("Tell a story")
              .pauseFor(1500)
              .deleteChars(12)
              .typeString("Build")
              .pauseFor(1500)
              .start();
          }}
        />
      </h2>
      <SlArrowDown className="hero-down" />
    </div>
  );
};
