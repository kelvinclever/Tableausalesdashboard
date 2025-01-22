import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [title, setTitle] = useState("Software Engineer");

  useEffect(() => {
    const titles = ["Software Engineer", "Data Analyst"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setTitle(titles[index]);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content">
      <h1>About Me</h1>
      <p>
      I am a vibrant and friendly software engineer with a strong foundation in full-stack development and data analysis. Skilled in React, Node.js, and Tableau, I excel in communication, engagement, and creating meaningful interactions. A passionate lifelong learner and team player.
      </p>
    </div>
  );
};

export default About;
