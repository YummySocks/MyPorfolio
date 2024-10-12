import React, { useState } from 'react';
import Projs from '../Projs';

function Portfolio() {


  const [projects] = useState([

    {
      name: 'password-generator',
      description: 'Simple Javascript',
      link: "https://yummysocks.github.io/Java-Script-Passwords/",
      repo: "https://github.com/YummySocks/Java-Script-Passwords"
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
