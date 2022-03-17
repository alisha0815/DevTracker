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
  span {
    padding-left: 1rem;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  .title {
    text-align: center;
  }
  .separator {
    border: solid 2px #27e9f2;
    min-width: 10rem;
  }
`;

const ContentWrapper = styled.div``;

export const Content = ({ job }) => {
  return (
    <div>
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
          <FontAwesomeIcon icon={faCode} className='sub--icon' />
          <CompanySubTitle>{job.position}</CompanySubTitle>
        </div>
        <div>
          <FontAwesomeIcon icon={faClipboard} className='sub--icon' />
          <CompanySubTitle>{job.status}</CompanySubTitle>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDays} className='sub--icon' />
          <CompanySubTitle>
            {moment(job.date_applied).format('ll')}
          </CompanySubTitle>
        </div>
        <div>
          <FontAwesomeIcon icon={faBell} className='sub--icon' />
          <CompanySubTitle>
            {moment(job.date_interview).format('llll')}
          </CompanySubTitle>
        </div>
      </ContentWrapper>
    </div>
  );
};
