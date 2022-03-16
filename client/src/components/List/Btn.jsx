import React from 'react';
import COLORS from '../../styles/styled.constants';
import styled from 'styled-components';

const TagButton = styled.button`
  border: 1px solid ${COLORS.button};
  margin: 0.5em;
  padding: 0.3em;
  width: 150px;
  height: 80px;
  border-radius: 30px;
  background-color: white;
  color: ${COLORS.button};
  :hover {
    background-color: ${COLORS.button};
    color: white;
  }
`;

export const Btn = ({ value, setFilter }) => {
  return (
    <TagButton
      className='tag--btn'
      onClick={() => setFilter(value === 'all' ? null : value)}
      value={value}>
      {value}
    </TagButton>
  );
};
