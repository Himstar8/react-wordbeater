import React, { Component } from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Styled from 'styled-components';
import Main from './components/Main';
import Select from './components/Selector.jsx';

const MainCard = Styled.div`
                height: 60vh;
                width: 85vw;
                background-color: #424242;
                margin: 40px auto;
                box-shadow: 7px 7px 10px rgba(0,0,0,0.3);

`;

const MyApp = Styled.div`
                  text-align: center;
                  max-height: 100vh;
`;

// eslint-disable-next-line no-unused-vars
const wordApi =
  'http://api.wordnik.com/v4/words.json/randomWords?api_key=a4f678ccca4617558150a00ada6048464fa4416f6ad83c1cd&limit=50';

const dummyWords = [
  { id: 11631, word: 'Astarte' },
  { id: 478403, word: 'Cameroons' },
  { id: 480121, word: 'Ellesmere Island' },
  { id: 481703, word: 'Horseshoe Falls' },
  { id: 825194, word: 'Iblis' },
  { id: 555730, word: 'Lyell' },
  { id: 598422, word: 'Neale' },
  { id: 484586, word: 'Nereus' },
  { id: 484872, word: 'Oglala' },
  { id: 558376, word: 'Rushdie' },
  { id: 1491541, word: 'Schumpeter' },
  { id: 498593, word: 'ambulance-chaser' },
  { id: 8422, word: 'antisocial' },
  { id: 1658476, word: 'bansuri' },
  { id: 14747, word: 'barefacedly' },
  { id: 248279, word: 'bleated' },
  { id: 252355, word: 'capitalizations' },
  { id: 12278372, word: 'circumprimary' },
  { id: 256964, word: 'cognates' },
  { id: 46523, word: 'dejeune' },
  { id: 57555, word: 'endolymph' },
  { id: 65039, word: 'figurativeness' },
  { id: 278477, word: 'gates' },
  { id: 3045983, word: 'gurgitators' },
  { id: 116210, word: 'incomprehensively' },
  { id: 99979, word: 'lavage' },
  { id: 80777, word: 'loess' },
  { id: 740178, word: 'longjohns' },
  { id: 296063, word: 'malamutes' },
  { id: 298745, word: 'mikveh' },
  { id: 17372676, word: 'monofluoride' },
  { id: 301986, word: 'musculatures' },
  { id: 306536, word: 'onetime' },
  { id: 321032, word: 'raggy' },
  { id: 71765, word: 'redress' },
  { id: 191719, word: 'rootedness' },
  { id: 192653, word: 'runch' },
  { id: 329453, word: 'scamps' },
  { id: 3383793, word: 'shakha' },
  { id: 73089, word: 'sisterhood' },
  { id: 80932, word: 'souse' },
  { id: 398506, word: 'spear-point' },
  { id: 3314006, word: 'squicks' },
  { id: 212628, word: 'swell-mobsman' },
  { id: 219932, word: 'transfixed' },
  { id: 810174, word: 'unjacketed' },
  { id: 225649, word: 'unorthodoxy' },
  { id: 76812, word: 'venery' },
  { id: 546789, word: 'wave-cut' },
  { id: 236269, word: 'website' }
];

class App extends Component {
  state = {
    isPlaying: false,
    score: 0,
    words: [],
    currentWord: '',
    timer: 5,
    selectedTimer: 5
  };

  pickRandomWord = words => {
    const randIndex = Math.floor(Math.random() * words.length);
    return words[randIndex];
  };

  showWord = () => {
    const words = dummyWords.map(item => item.word);
    const word = this.pickRandomWord(words);
    this.setState({
      currentWord: word
    });
  };

  matchHandler = () => {
    this.showWord();
    this.setState({
      score: this.state.score + 1,
      timer: this.state.selectedTimer + 1
    });
  };

  replay = () => {
    this.showWord();
    this.setState({
      isPlaying: true,
      timer: this.state.selectedTimer,
      score: 0
    });
  };

  gameOverHandler = () => {
    this.setState({
      isPlaying: false
    });
  };

  counter = () => {
    if (this.state.isPlaying && this.state.timer > 0) {
      this.setState({
        timer: this.state.timer - 1
      });
    }
    if (this.state.timer === 0) {
      this.gameOverHandler();
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.counter();
    }, 1000);
  }

  getWords = () => {
    // fetch(wordApi)
    //   .then(res => res.json())
    //   .then(data => {
    //     const words = data.map(item => item.word);
    //     this.setState({
    //       ...this.state,
    //       words: words,
    //       isPlaying: true
    //     });
    //     this.showWord();
    //   })
    //   .catch(err => console.log('Error while trying to get words', err));
    const words = dummyWords.map(item => item.word);
    this.setState({
      isPlaying: true,
      words: words
    });
    this.showWord();
  };

  changeTimer = e => {
    this.setState({ selectedTimer: parseInt(e.target.value, 10) });
  };

  render() {
    return (
      <MyApp>
        <Header />
        <MainCard>
          <Main
            score={this.state.score}
            timer={this.state.timer}
            selectedTimer={this.state.selectedTimer}
            getWords={this.getWords}
            word={this.state.currentWord}
            isPlaying={this.state.isPlaying}
            onMatch={this.matchHandler}
            replay={this.replay}
          />
          <Select onChange={this.changeTimer} />
        </MainCard>
        <Instructions />
      </MyApp>
    );
  }
}

export default App;
