import React, { Component } from "react"
import Letter from "./Letter"

class Letters extends Component{
    generateLetterTags(){
        const letterStatus = (this.props.letterStatus)
        return Object.keys(letterStatus).map(m=>{return(<Letter letter={m} key={m} status={letterStatus[m] ? "selected" : null} selectLetter={this.props.selectLetter} />)})

    }
    updateScore(){
}
render(){
    return(
        <div>
            <div>Here are your letters</div>
            <span className="letter">{this.generateLetterTags()}</span>
        </div>
    )
}
}
export default Letters
