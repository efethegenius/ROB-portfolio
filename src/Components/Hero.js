import React, { useState, useContext } from "react";
import { HiOutlineArrowNarrowDown, HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import Typewriter from "typewriter-effect";
import { Link, animateScroll as scroll } from "react-scroll";
import "animate.css";
import Fade from "react-reveal/Fade";
import { AuthContext } from "../helpers/AuthContext";

export const Hero = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(AuthContext);

  let darkModeStatus;
  darkModeStatus = localStorage.getItem("dark-mode");
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
        {darkModeStatus === "enabled" ? (
          <MdLightMode
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("dark-mode", "disabled");
            }}
            className="mode-switch"
          />
        ) : darkModeStatus === "disabled" ? (
          <MdDarkMode
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("dark-mode", "enabled");
            }}
            className="mode-switch"
          />
        ) : (
          <MdDarkMode
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("dark-mode", "enabled");
            }}
            className="mode-switch"
          />
        )}
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
          {darkModeStatus === "enabled" ? (
            <MdLightMode
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                localStorage.setItem("dark-mode", "disabled");
              }}
              className="mode-switch"
            />
          ) : darkModeStatus === "disabled" ? (
            <MdDarkMode
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                localStorage.setItem("dark-mode", "enabled");
              }}
              className="mode-switch"
            />
          ) : (
            <MdDarkMode
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                localStorage.setItem("dark-mode", "enabled");
              }}
              className="mode-switch"
            />
          )}
        </div>
      </nav>
      <Fade top cascade>
        <h1 className="intro">
          Hi, I'm{" "}
          <span className={darkModeStatus === "enabled" ? "dark-name" : "name"}>
            Benedicta
          </span>{" "}
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
      <Link
        to="about-link"
        smooth={true}
        duration={2000}
        spy={true}
        activeClass="active"
      >
        <SlArrowDown className="hero-down" />
      </Link>
    </div>
  );
};
