import React from "react"

class Score extends React.Component{
    generateScore(){
        let score = this.props.score
        if(score>=80){
            return (<div className="highScore">{this.props.score}</div>)
        }
        else if(score>=50){
            return (<div className="medScore">{this.props.score}</div>)
        }
        else {
            return (<div className="lowScore">{this.props.score}</div>)
        }
    }
    render(){
        return <span className="score">{this.generateScore()}</span>
    }
}
export default Score