import React, { Component } from "react"
class NewGame extends Component{
    render(){
        return(
            <button onClick={this.props.newGame}>New Game</button>
        )
    }
}
export default NewGame