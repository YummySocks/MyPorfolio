import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {


  const [projects] = useState([
    {
      name: 'Weather Dashboard',
      description: 'Simple API calls',
      link: "https://yummysocks.github.io/Weather-Or-Not/",
      repo: "https://github.com/YummySocks/Weather-Or-Not"
    },
    {
      name: 'Password Generator',
      description: 'Simple Javascript',
      link: "https://yummysocks.github.io/Java-Script-Passwords/",
      repo: "https://github.com/YummySocks/Java-Script-Passwords"
    },
    {
      name: 'Party Planner',
      description: 'MERN Stack app',
      link: "https://group-event-planner.herokuapp.com",
      repo: "https://github.com/YummySocks/event-planner"
    },
    {
      name: 'Note Taker',
      description: 'Simple note taker with Express',
      link: "https://note-taker-pds.herokuapp.com/",
      repo: "https://github.com/YummySocks/Express-Note"
    },
    {
      name: 'Budget tracker',
      description: 'React/JavaScript/CSS',
      link: "https://budget-tracker-time.herokuapp.com/",
      repo: "https://github.com/YummySocks/Budget-Track"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
