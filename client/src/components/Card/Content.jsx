import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCode,
  faCalendarDays,
  faBell,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';

const CompanySubTitle = styled.div`
  display: inline-block;
`;


const TitleWrapper = styled.div`

  .title {
    text-align: center;
    min-height: 3rem;
  }
  .separator {
    border: solid 2px #27e9f2;
    min-width: 10rem;
  }
  h2{
    font-size: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
 .sub-icon{
   margin-right: 1rem; 
  }
`;

const Container = styled.div ` 
  width: 100%;
`;


export const Content = ({ job }) => {
  return (
    <Container>
      <TitleWrapper>
        <div className='title'>
          <h2>{job.company}</h2>{' '}
        </div>
        <div>
          <hr className='separator'></hr>
        </div>
      </TitleWrapper>

      <ContentWrapper>
        <div>
          <FontAwesomeIcon icon={faCode} className='sub-icon' />
          <CompanySubTitle style={{ fontSize:'1rem'}} >{job.position}</CompanySubTitle>
        </div>
        <div>
          <FontAwesomeIcon icon={faClipboard} className='sub-icon' />
          <CompanySubTitle style={{marginLeft:'10px', fontSize:'1rem'}}>{job.status}</CompanySubTitle>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDays} className='sub-icon' />
          <CompanySubTitle style={{marginLeft:'10px', fontSize:'1rem'}}>
            {moment(job.date_applied).format('ll')}
          </CompanySubTitle>
        </div>
        <div>
          <FontAwesomeIcon icon={faBell} className='sub-icon' />
          <CompanySubTitle style={{marginLeft:'10px', fontSize:'1rem'}}>
            {moment(job.date_interview).format('llll')}
          </CompanySubTitle>
        </div>
      </ContentWrapper>
    </Container>
  );
};
