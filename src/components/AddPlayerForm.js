import React,{Component} from "react";

class AddPlayerForm extends Component{
    // initalizing the value as an emplty literal
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
        // adding only when calue is not empty
        if(this.state.value!== ""){
            this.props.addPlayer(this.state.value);
        }
        // after addition clearing out the input 
        this.setState({
            value:""
        })
    }

    render(){
        return(
            // calling on submit event to add player
            <form onSubmit={this.handleSubmit}>
            {/* calling on change as when we type in the input , its internal state changes */}
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter Players's Name"
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
