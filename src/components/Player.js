import React from "react"; 
//importing counter
import Counter from "./Counter";
// player component accepting all the props through player jsx tag
const Player = (props) => {



    return (
      <div className="player">
        <span className="player-name">
        {/* using callback function and thropugh remove player prop removving the player */}
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          { props.name }
        </span>
          {/* sending score props to counter component */}
        <Counter 
        score={props.score}
        changeScore={props.changeScore}
        index={props.index}
        />
      </div>
    );
  }
  export default Player;