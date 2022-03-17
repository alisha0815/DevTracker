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

export const Content = ({ job }) => {
  return (
    <div>
      <div>
        <div style={{ textAlign: 'center' }}>
          <h2>{job.company}</h2>{' '}
          <hr style={{ border: 'solid 2px #27E9F2', minWidth: '10rem' }}></hr>{' '}
        </div>
        ;
      </div>
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
    </div>
  );
};
