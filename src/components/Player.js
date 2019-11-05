import React from "react"; 
//importing counter
import Counter from "./Counter";
import Icon from "./Icon";
// player component accepting all the props through player jsx tag
const Player = (props) => {
    return (
      <div className="player">

        <span className="player-name">
        {/* using callback function and thropugh remove player prop removving the player */}
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        <Icon score={props.score}
          highScore = {props.highScore}
        />
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