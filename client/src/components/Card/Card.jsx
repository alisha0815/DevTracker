import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faTrashCan,
  faRepeat,
} from '@fortawesome/free-solid-svg-icons';
import { Paragraph } from './Paragraph';
import { CardBtn } from './CardBtn';

const CompanyList = styled.div`
box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
border-radius: 15px;
width: 100%;
display: flex;
justify-content: center;
.company--title {
  font-size: 1.8em;
  text-align: center;
  padding: 1.2rem;
} 
  h2 {
    padding-left: 1.2rem;
    display: inline-block;
  }
}
`;
const CompanyWrapper = styled.div`
  width: 100%;
  font-size: 1.2em;
`;
const CompanyCardButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.4rem;
  display: flex;
  justify-content: space-evenly;
`;

export const Card = ({ job, editHandler, deleteHandler }) => {
  return (
    <CompanyList key={job._id}>
      <CompanyWrapper>
        <div className='card--section'>
          {Object.keys(job).map(property => {
            return <Paragraph property={property} job={job}></Paragraph>;
          })}
        </div>
        <li className='update'>
          <FontAwesomeIcon icon={faRepeat} />
          Last update {moment(job.updatedAt).startOf('day').fromNow()}
        </li>

        <CompanyCardButton>
          <CardBtn
            handler={editHandler}
            icon={faPenToSquare}
            job={job}></CardBtn>
          <CardBtn
            handler={deleteHandler}
            icon={faTrashCan}
            job={job}></CardBtn>
        </CompanyCardButton>
      </CompanyWrapper>
    </CompanyList>
  );
};
