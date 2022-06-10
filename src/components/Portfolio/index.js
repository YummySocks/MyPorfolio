import React, { useState } from 'react';
import Projs from '../Projs';

function Portfolio() {


  const [projects] = useState([
    {
      name: 'weather-dashboard',
      description: 'Simple API calls',
      link: "https://yummysocks.github.io/Weather-Or-Not/",
      repo: "https://github.com/YummySocks/Weather-Or-Not"
    },
    {
      name: 'password-generator',
      description: 'Simple Javascript',
      link: "https://yummysocks.github.io/Java-Script-Passwords/",
      repo: "https://github.com/YummySocks/Java-Script-Passwords"
    },
    {
      name: 'party-planner',
      description: 'MERN Stack app',
      link: "https://group-event-planner.herokuapp.com",
      repo: "https://github.com/YummySocks/event-planner"
    },
    {
      name: 'note-taker',
      description: 'Simple note taker with Express',
      link: "https://note-taker-pds.herokuapp.com/",
      repo: "https://github.com/YummySocks/Express-Note"
    },
    {
      name: 'budget-tracker',
      description: 'React/JavaScript/CSS',
      link: "https://budget-tracker-time.herokuapp.com/",
      repo: "https://github.com/YummySocks/Budget-Track"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Projs
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
