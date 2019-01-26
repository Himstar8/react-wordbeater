import React, { Component } from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Styled from 'styled-components';
import Main from './components/Main';

const MainCard = Styled.div`
                height: 60vh;
                width: 85vw;
                background-color: #424242;
                margin: 40px auto;

`;

const wordApi =
  'http://api.wordnik.com/v4/words.json/randomWords?api_key=a4f678ccca4617558150a00ada6048464fa4416f6ad83c1cd&limit=50';

class App extends Component {
  state = {
    isPlaying: false,
    score: 0,
    words: [],
    currentWord: '',
    timer: 5
  };

  pickRandomWord = words => {
    const randIndex = Math.floor(Math.random() * words.length);
    return words[randIndex];
  };

  showWord = () => {
    this.setState({
      ...this.state,
      currentWord: this.pickRandomWord(this.state.words)
    });
  };

  matchHandler = () => {
    console.log('trigger');
    this.showWord();
    this.setState({
      score: this.state.score + 1
    });
  };

  gameOverHandler = () => {};

  counter = () => {
    if (this.state.isPlaying && this.state.timer > 0) {
      this.setState({
        timer: this.state.timer - 1
      });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.counter();
    }, 1000);
  }

  getWords = () => {
    fetch(wordApi)
      .then(res => res.json())
      .then(data => {
        const words = data.map(item => item.word);
        this.setState({
          ...this.state,
          words: words,
          isPlaying: true
        });
        this.showWord();
      })
      .catch(err => console.log('Error while trying to get words', err));
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Header />
        <MainCard>
          <Main
            score={this.state.score}
            timer={this.state.timer}
            getWords={this.getWords}
            word={this.state.currentWord}
            onMatch={this.matchHandler}
          />
        </MainCard>
        <Instructions />
      </div>
    );
  }
}

export default App;
