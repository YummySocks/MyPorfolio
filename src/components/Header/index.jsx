import React from "react";
import NavBar from "../NavBar";
function Header(props){
    return (
        <header className="flex-row space-between px-1">
          <h1>Patrick Sutcliffe</h1>
<<<<<<< HEAD:src/components/Header/index.js
          <div className="container"> {props.children}</div>
          
         
=======
          {props.children}
>>>>>>> 7cc8f6ffbe10440f30807f19fef24d6534b7e8c4:src/components/Header/index.jsx
        </header>
      );
}

export default Header