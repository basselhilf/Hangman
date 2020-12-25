import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters'
import Score from './components/Score'
import Solution from './components/Solution'
import NewGame from './components/NewGame'


const newWordHints = [
  {word: "BASSEL", hint: "My Name ?"},
  {word: "MOTORCYCLE", hint: "Amazing Machines?"},
  {word: "DANNY", hint: "Instructor Name"},
  {word: "SLEEP", hint: "My Sport ?"},
  {word: "HILF", hint: "My Last Name"}
]
let gameLevel = -1 
class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatus(),
      score: 100,
      word: "WELCOME",
      hint: "... To The Game",
      addedScore: 0
    }
  }

  generateLetterStatus() {
    let i = 65
    let letterStatus = {}
    while (i <=90) {
        letterStatus[String.fromCharCode(i)] = false
        i++
    }
    console.log(letterStatus)
    return letterStatus
  }
  
  selectLetter = (letter) => {
    let letterStatus = {...this.state.letterStatus}
    letterStatus[letter] = true
    this.setState({letterStatus: letterStatus})
  }

  updateScore = (letter) => {
    let newScore = this.state.score
    let newAddedScore = this.state.addedScore
    if (this.state.word.indexOf(letter) >-1){
      newScore += 5
      newAddedScore += this.state.word.split(letter).length-1
    } else {
      newScore -= 20
    }
      this.setState ({score: newScore, addedScore: newAddedScore})
  }

  selectAndUpdateLetter = (letter) => {
    this.selectLetter(letter)
    this.updateScore(letter)
  }

  startNewGame = () => {
    let letterStatus = this.generateLetterStatus()
    if (gameLevel < newWordHints.length)
    {gameLevel += 1}
    else {gameLevel = 1}

    this.setState({letterStatus: letterStatus, score: 100, word: newWordHints[gameLevel].word, hint: newWordHints[gameLevel].hint, addedScore: 0})
  }

  render() {
    if (this.state.score <= 0) {
      return (
        <div>
          <div className = "gameOver">GAME OVER</div>
          <NewGame newGame = {this.startNewGame}/>
        </div>
      )
    }
    else if (this.state.addedScore === this.state.word.length) {
      return (
        <div>
          <div className = "youWin">You Win</div>
          <NewGame newGame = {this.startNewGame}/>
        </div>
      )
    } 
    else {  return (
        <div>
          <div className="letters">
            <Letters letterStatus = {this.state.letterStatus} 
              selectLetter = {this.selectAndUpdateLetter}/>
          </div>
          <div><Solution letterStatus = {this.state.letterStatus} 
                        selectLetter = {this.selectLetter} 
                        word = {this.state.word} 
                        hint = {this.state.hint}/></div>
          <div> Your Score is: <Score score={this.state.score}/> </div>
        </div>
      );
  }}
}

export default App;
