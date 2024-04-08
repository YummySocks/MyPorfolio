import React from "react";

function Footer() {


    const icons = [
      {
        name: "fab fa-github",
        link: "https://github.com/YummySocks"
      },
      {
        name: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/patrick-sutcliffe-15616221a/"
      }
    ]
  
    return (
      <footer className="flex-row px-1">
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
          )}
      </footer>
    );
  }
  
  export default Footer;
  