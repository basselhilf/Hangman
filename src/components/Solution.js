import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {

    generateWordLetters() {
        const words = this.props.word
        return words.split("").map(w => {
            return <Letter 
            letter ={this.props.letterStatus[w] ? w : "_ "} 
            key ={w}
            status = {"solutionLetter"}
            selectLetter = {this.props.selectLetter} 
            />
        })
    }

    render() {
        return (
            <div>
                <div className = "hint">{this.props.hint}</div>
                <span>{this.generateWordLetters(this.props.word)}</span>
            </div>
        )
    }
}

export default Solution