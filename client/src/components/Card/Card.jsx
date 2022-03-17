import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faTrashCan,
  faRepeat,
} from '@fortawesome/free-solid-svg-icons';
import { CardBtn } from './CardBtn';
import { Content } from './Content';

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
  display: flex;
  align-items: center;
  justify-content: center;
}

`;
const CompanyWrapper = styled.div`
  width: 100%;
  font-size: 1.2em;
  background-color: #ebebeb;
  margin: 1rem;
  border-radius: 3px;
  padding: 2rem;
`;
const CompanyCardButton = styled.div`
  margin-top: 1rem;
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
    <CompanyList key={job._id}>
      <CompanyWrapper>
        <CardSection>
          <Content job={job}></Content>
        </CardSection>
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
