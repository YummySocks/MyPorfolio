import React from "react";
import NavBar from "../NavBar";
function Header(props){
    return (
        <header className="flex-row space-between px-1">
          <h1>Patrick Sutcliffe</h1>
          {props.children}
        </header>
      );
}

export default Header