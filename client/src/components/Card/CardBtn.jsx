import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled.div`
  font-size: 1.5em;
  /* display: inline-block;
text-align: center;
margin: 0 auto; */
`;

export const CardBtn = ({ handler, icon, job }) => {
  return (
    <Icon>
      <button onClick={() => handler(job._id)}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </Icon>
  );
};
