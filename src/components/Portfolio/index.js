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
      name: 'ecommerce-site',
      description: 'React and Mongo',
      link: "https://pump-haus-ecommerce.herokuapp.com/",
      repo: "https://github.com/Battling-Brewers/Pump-Haus"
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
