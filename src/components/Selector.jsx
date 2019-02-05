import React from 'react';
import Styled from 'styled-components';

const Select = props => (
  <Selector>
    <label>Select a timer</label>
    <select
      onChange={e => {
        props.onChange(e);
      }}
    >
      <option disabled value="">
        Select a timer
      </option>
      <option value="3">3s</option>
      <option value="5">5s</option>
      <option value="7">7s</option>
      <option value="10">10s</option>
      <option value="15">15s</option>
    </select>
  </Selector>
);

const Selector = Styled.div`
                  margin: 2rem .5rem  10% 10%;
                  font-size: 1.2rem;
                  color: #fff;
                  display: flex;
                  flex-direction: rows;

                  label {
                    margin-right: 1rem;
                  }

`;

export default Select;
