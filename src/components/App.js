import React,{Component} from 'react';
//importing Header and Player component
import Header from "./Header";
import Player from "./Player";
// Main app component
class App extends Component {
  // players state containing name of the player, its score as well as id for the key
  state = {
    players: [
      {
        name: "Guil",
        score:0,
        id: 1
      },
      {
        name: "Treasure",
        score:0,
        id: 2
      },
      {
        name: "Ashley",
        score:0,
        id: 3
      },
      {
        name: "James",
        score:0,
        id: 4
      }
    ]
  };
//removing the player from the app 
  removePlayerHandler = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }
  //updating the score using counter buttons
  scoreChangeHandler = (index, delta) => {
      this.setState( prevState => ({
        score: prevState.players[index].score += delta
      }));
  }

 
  render() {
    return (
      <div className="scoreboard">
      {/* header component */}
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players} 
        />
  
        {/* Players list using map method*/}
        {this.state.players.map( (player,index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.removePlayerHandler}
            changeScore={this.scoreChangeHandler}
            index={index}           
          />
        )}
      </div>
    );
  }
}

export default App;
