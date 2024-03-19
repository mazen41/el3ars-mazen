import React, { useState, useEffect } from "react";
import EastIcon from "@mui/icons-material/East";
import "./welcome.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useTheme } from '../../Them';

const Welcome = () => {
  const [welcomeText, setWelcomeText] = useState("");
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();



  useEffect(() => {
    const textToType = "Welcome!";
    let index = 0;

    const intervalId = setInterval(() => {
      setWelcomeText(textToType.substring(0, index + 1));
      index++;

      if (index === textToType.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setLoading(false);
        }, 600);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <motion.div
      className={`welcome ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading ? (
        <div className="loading-animation" id="loading-animation">
          <h2 id="text">{welcomeText}</h2>
        </div>
      ) : null}

      <div className="container" style={{ display: loading ? "none" : "" }}>
        <div className="nav">
          <Navbar />
        </div>
        <div className="introduction">
          <div className={`title`}>
            <h2 className="name">I'M MAZEN HOSSNY</h2>
          </div>
          <div className="description">
            <p className="first">
              Hey there,I'm Mazen Hossny, a seasoned{" "}
              <span>full-stack developer</span> with a six-year journey in web
              development. My passion extends beyond the digital realm; I love
              programming in any form, not just confined to web development.
            </p>
            <p>
              Specializing in <span>React and Laravel</span>, I bring a wealth
              of experience to the table, transforming concepts into seamless
              and dynamic digital experiences. Whether it's crafting intuitive
              user interfaces or architecting robust backend systems, I thrive
              on the challenges that technology presents. Beyond the lines of
              code, you'll find me immersed in the world of music, particularly
              in the rhythm and rhymes of rap. Books and cinema also hold a
              special place in my heart, providing endless inspiration and a
              unique perspective that I bring to my development endeavors.
            </p>
            <p>
              <span>Let's connect</span> and explore how we can turn your ideas
              into digital realities. Welcome to my digital universe!
            </p>
          </div>
          <div className="about_link">
            <Link to={"/about"}>
              <p>See More About Me</p>
            </Link>
            <span>
              <EastIcon />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
