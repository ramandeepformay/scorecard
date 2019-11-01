import React,{Component} from "react";

class Stopwatch extends Component{
    state ={
        isRunning:false,
        // will hold total time elased
        elapsedTime:0,
        // will hold previos tick happened at what time
        previousTime:0
    }
    // called by react 
    componentDidMount(){
        // calling tick function at every 100 ms
        this.intervalId = setInterval(()=>this.tick(),100)
    }
    tick(){
        // storing current time
        const now =Date.now();
        // if if stement is true mode means in stop mode ui then previous time has value holding current time and also adding the value in elapsed time by holding current previous and previous "previous"
        if(this.state.isRunning){
            this.setState((prevState)=>({
                previousTime:now,
                elapsedTime:prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    }
    // toggling start and stop when clicking the button
    toggleHandler=()=>{
        this.setState((prevState)=>({
            isRunning:!prevState.isRunning
        }));
        // if if statement is false means when ui is start stoe the valsue in previous time
        if(!this.state.isRunning){
            this.setState((prevState)=>({
                previousTime:Date.now()
            }));
        }
    }
    // resetting the watch timer
    resetHandler=()=>{
        this.setState({elapsedTime:0})
    }

    // component unmounting method
    componentWillUnmount(){
        // clearing time interval to prevent memory leak
        clearInterval(this.intervalId);
    }

    render(){
        /* using ternary opeartor changing text of button */
        const seconds = Math.floor(this.state.elapsedTime/1000);
        // ternary operator for toggling start and stop ui
        const handler =this.state.isRunning?"Stop":"Start"
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {seconds}
                </span>
                <button onClick={this.toggleHandler}>
                    {handler}
                </button> 
                <button onClick={this.resetHandler}>Reset</button>
            </div> 
        );
    }
}
export default Stopwatch;