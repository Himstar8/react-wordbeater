import React, { Component } from 'react';
import Styled from 'styled-components';

class Header extends Component {
  render() {
    return <Topbar>WordBeater</Topbar>;
  }
}

const Topbar = Styled.div`
            background-color: #424242;
            color: #fff;
            font-size: 3rem;
            min-height: 5rem;
            display: flex;
            flex-direction: column;
            align-item: center;
            justify-content: center;
            
`;

export default Header;
