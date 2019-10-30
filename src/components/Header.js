import React from "react";
// importing stats 
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = (props) => {
    return (
      <header>
        <Stats 
          totalPlayers={props.totalPlayers}
        />
        <h1>{ props.title }</h1>
        {/* STOP WATCH COMPONENT */}
        <Stopwatch /> 
      </header>
  );
}

export default Header;