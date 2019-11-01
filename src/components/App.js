import React,{Component} from 'react';
//importing Header and Player component
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm"
// Main app component
class App extends Component {
  // players state containing name of the player, its score as well as id for the key
  state = {
    players: [
      {
        name: "Raman",
        score:0,
        id: 1
      },
      {
        name: "Aman",
        score:0,
        id: 2
      },
      {
        name: "Jaspreet",
        score:0,
        id: 3
      },
      {
        name: "Sarab",
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
  // setting counter value
  prevId = 5;

  //adding new player 
  newPlayerHandler=(name)=>{
    this.setState((prevState)=>{
      return{
        players:[
          ...prevState.players,
          {
            //  name:name or name both are same
          name,
          score:0,
          id:this.prevId+=1
        }]
      }
    })
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
        {/* adding add player componnent */}
        <AddPlayerForm addPlayer={this.newPlayerHandler}/>
      </div>
    );
  }
}

export default App;
