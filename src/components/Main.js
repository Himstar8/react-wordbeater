import React, { Component } from 'react';
import Styled from 'styled-components';

class Main extends Component {
  state = {
    word: ''
  };

  componentDidMount() {
    this.props.getWords();
  }

  ChangeHandler = e => {
    e.preventDefault();
    this.setState({
      word: e.target.value
    });
    if (this.props.word === e.target.value) {
      this.props.onMatch();
      this.setState({
        word: ''
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <h4>
          Type the given word withing <span>{this.props.timer}</span> seconds{' '}
        </h4>
        <Input>
          <span>{this.props.word}</span>
          <input
            type="text"
            placeholder="Start typing here..."
            onChange={this.ChangeHandler}
            value={this.state.word}
            autoFocus
          />
          <span>Game Over!!!</span>
        </Input>
        <Footer>
          <span>Time left: {this.props.timer}</span>
          <span>Score: {this.props.score}</span>
        </Footer>
      </Wrapper>
    );
  }
}

const Footer = Styled.div`
                display: flex;
                grid-area: footer
                color: #fff !important;
                font-size: 2rem;
                padding: 0.2rem 1rem;
                flex-direction: row;
                justify-content: space-between;
                span {
                  background-color: #757575
                  padding: 0.4rem;
                  border-radius: 0.25rem;
                }
`;

const Wrapper = Styled.div`
                color: #fff;
                padding: .3rem;
                display: grid;
                grid-template-columns: auto 85% auto;
                grid-template-rows: 20% auto 20%;
                grid-template-areas: "hd hd hd"
                                     ". main ."
                                     ". footer .";

                h4 {
                  grid-area: hd;
                  span {
                    color: #4caf50;
                  }
                }
`;

const Input = Styled.div`
                text-align: center;
                grid-area: main; 
                
                
                padding: .375rem .75rem;
                

                input {
                    width: 100%;
                    display: block;
                    height: 3rem;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    background-color: white;
                    border: 1px solid white;
                    border-radius: 0.25rem;
                    padding-left: .6rem;
                }

                span:nth-child(1) {
                  color: #fff;
                  margin-bottom: 1rem;
                  font-size 4rem;
                }

                span:last-child {
                  color: #fff;
                  margin-top: 5rem;
                  font-size: 1.5rem;
                }
`;

export default Main;
