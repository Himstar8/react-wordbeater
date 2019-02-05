import React from 'react';
import Styled from 'styled-components';

const Instructions = props => (
  <Card>
    <p>
      Type each word in the given amount of seconds to score. To play again just
      type the current word. Your score will reset.
    </p>
  </Card>
);

const Card = Styled.div`
              max-width: 70vw;
              background-color: #757575;
              color: #fff;
              font-size: 1.5rem;
              padding: .3rem;
              border-radius: 5px;
              margin: 0 auto;
              
             
`;

export default Instructions;
