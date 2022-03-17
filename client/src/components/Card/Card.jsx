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
import { Job } from '../../interfaces';

const CompanyList = styled.div`

border-radius: 15px;
width: 50%;
display: flex;
justify-content: center;
.company--title {
  font-size: 1.8em;
  text-align: center;
} 
  h2 {
    display: inline-block;
  }
}
.update {
  align-items: center;
  justify-content: center;
}

`;
const CompanyWrapper = styled.div`
  width: 100%;
  font-size: 1.2em;
  background-color: #ebebeb; 
  margin: 1rem; 
`;
const CompanyCardButton = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const Card = ({ job, editHandler, deleteHandler } : {job: Job, editHandlet:any, deleteHandler:any}) => {
export const Card = ({ job, editHandler, deleteHandler }) => {
  return (
    <CompanyList key={job._id} >
      <CompanyWrapper >
        {/* <div className='card--section'> */}
        <CardSection>
          {Object.keys(job).map(property => {
            return <Paragraph property={property} job={job}></Paragraph>;
          })}
        </CardSection>
        {/* </div> */}
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
