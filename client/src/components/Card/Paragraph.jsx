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
  padding-left: 1.5rem;
  span {
    padding-left: 1rem;
  }
`;

export const Paragraph = ({ property, job }) => {
  const showParagraph =
    property !== 'uid' &&
    property !== '_id' &&
    property !== 'createdAt' &&
    property !== 'updatedAt' &&
    property !== '__v'
      ? true
      : false;

  let icon;
  let value = job[property];
  if (property === 'company') {
    icon = faBuilding;
    value = <h2>{value}</h2>;
  }

  if (property === 'position') {
    icon = faCode;
  }
  if (property === 'status') {
    icon = faClipboard;
  }
  if (property === 'date_applied') {
    icon = faCalendarDays;
    value = moment(value).format('ll');
  }
  if (property === 'date_interview') {
    icon = faBell;
    value = moment(value).format('llll');
  }

  moment(job.date_applied).format('ll');

  return (
    <div>
      {showParagraph ? (
        <>
          <FontAwesomeIcon icon={icon} className='sub--icon' />
          <CompanySubTitle> {value}</CompanySubTitle>
        </>
      ) : null}
    </div>
  );
};
