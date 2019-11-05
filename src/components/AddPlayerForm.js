import React,{Component} from "react";

class AddPlayerForm extends Component{
    // initalizing the value as an emplty literal
    playerInput = React.createRef();
  
    state={
        value:""
    };
    // value change handler
    handleValueChange=(e)=>{
        this.setState({
                value:e.target.value
            }) 
        }

    // submit handler 
    handleSubmit=(e)=>{
        // stopping the dafault behaviour of the browser
        e.preventDefault();
        // passing the current value of input  using add player prop
        // adding only when value is not empty
        if(this.state.value!== ""){
            this.props.addPlayer(this.state.value);
        }
        // after addition clearing out the input 
        this.setState({
            value:""
        })
    }

    render(){
        console.log(this.playerInput);
        return(
            // calling on submit event to add player
            <form onSubmit={this.handleSubmit}>
            {/* calling on change as when we type in the input , its internal state changes */}
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter Players's Name"
                    ref={this.playerInput}
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );

    }
}
export default AddPlayerForm;
