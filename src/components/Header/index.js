import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg'

function Header(props){
    return (
        <header className="flex-row space-between px-1">
          <h1>Patrick Sutcliffe</h1>
          <div className="container"> {props.children}</div>
          
         
        </header>
      );
}

export default Header