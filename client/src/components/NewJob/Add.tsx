import jobService from '../../service/jobService';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import COLORS from '../../styles/styled.constants';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Job } from '../../interfaces';

const Form = styled.div`
  box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  padding-top: 2.4rem;
  text-align: center;
  margin: 0 auto;
  height: 90vh;
  position: relative;
  width: 100%;
  width: 70%;
  max-width: 50%;
  .form--box {
    z-index: 1000 !important;
  }import { Job } from '../../interfaces';

  .calendar {
    /* display: flex; */

    margin-left: 2rem;

    /* .applied {
    position: absolute;
    bottom: 210px;
    right: 140px;
    width: 260px;
    flex: 1;
  }
  .interview {
    position: absolute;
    bottom: 120px;
    right: 140px;
    width: 260px;
    flex: 1;
  } */
  }
`;

const FormWrapper = styled.div`
  /* background-color: green; */
  margin-top: 4rem;
  height: 70vh;
`;

const FormField = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-right: 1em;
  /* select:focus,
input:focus {
  outline: none;
} */
  input,
  select {
    /* background-color: yellow; */
    width: 60%;
    /* height: 50px; */

    border-radius: 15px;
    padding: 1rem;
    margin-bottom: 1.1rem;
    border: none;
  }
  option {
    font-size: 1.2rem;
    color: ${COLORS.text};
  }
  .company,
  .position,
  .status,
  .applied,
  .interview {
    font-size: 1.1em;
    color: ${COLORS.text};
  }
`;

const AddButton = styled.div`
  text-align: center;
  .add--btn,
  .cancel--btn {
    width: 130px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
  }
  button:disabled {
    background-color: grey;
  }
  .cancel--btn {
    background-color: white;
    color: ${COLORS.button};
    border: 1px solid ${COLORS.button};
  }
`;

const Add = ({ jobs, setJobs }: { jobs: Job[], setJobs: any }) => {
  let navigate = useNavigate();

  const userId: string = localStorage.getItem('uid')!


  type formStateType = {
    [key: string]: string
  }

  const [formState, setFormState] = useState<formStateType>({
    company: '',
    position: '',
    status: '',
    date_applied: '',
    date_interview: '',
  });

  const changeHandler = (e: React.FormEvent<HTMLElement>) => {
    const target = e.target as typeof e.target & {
      name: string,
      value: string
    };
    setFormState({ ...formState, [target.name]: target.value });
  };

  const isFormInvalid = () => {
    if (
      formState.company.length >= 1 &&
      formState.position.length >= 1 &&
      formState.status.length >= 1 &&
      formState.date_applied &&
      formState.date_interview
    ) {
      return false;
    }
    return true;
  };


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { company, position, status, date_applied, date_interview } =
      e.target as typeof e.target & {
        company: { value: string },
        position: { value: string },
        status: { value: string },
        date_applied: { value: string },
        date_interview: { value: string },
      };

    const newJob = await jobService.createJob({
      uid: userId,
      company: company.value,
      position: position.value,
      status: status.value,
      date_applied: date_applied.value,
      date_interview: date_interview.value,
    });
    setJobs([newJob, ...jobs]);

    navigate('/list');
  };

  type blurStateType = {
    [key: string]: boolean | string;
  }
  type filedNameType = 'company' | 'position' | 'status' | 'date_applied' | 'date_interview';

  const [blurState, setBlurState] = useState<blurStateType>({
    company: false,
    position: false,
    status: false,
    date_applied: false,
    date_interview: false,
  });

  const blurHandler = (e: React.FocusEvent<HTMLElement>) => {
    const target = e.target as typeof e.target & { name: string };

    setBlurState({ ...blurState, [target.name]: true });
  };

  const isFieldInvalid = (fieldName: filedNameType) => {
    if (blurState[fieldName] === true && formState[fieldName] === '') {
      return true;
    } return "";
  };

  return (
    <FormWrapper>
      <Form>
        <h1>Add a New Job</h1>
        <form onSubmit={submitHandler} className='form--box'>
          <FormField>
            <div className='company'>
              <label htmlFor='company'>Company name:</label>
              <input
                data-testid='idTest'
                className='input--filed'
                type='text'
                name='company'
                id='company'
                placeholder='Type a company'
                onChange={changeHandler}
                onBlur={blurHandler}
                aria-describedby={
                  isFieldInvalid('company') ? 'company-error' : undefined
                }
              />
              {isFieldInvalid('company') ? (
                <p data-testid={'company-error'}>Please provide company name</p>
              ) : null}
            </div>
          </FormField>
          <FormField>
            <label htmlFor='position'>Position:</label>
            <select
              data-testid='position'
              className='position'
              name='position'
              onChange={changeHandler}
              onBlur={blurHandler}
              aria-describedby={
                isFieldInvalid('position') ? 'position-error' : undefined
              }>
              <option hidden>Select Job Title</option>
              <option value='frontend'>frontend</option>
              <option value='backend'>backend</option>
              <option value='fullstack'>fullstack</option>
            </select>
            {isFieldInvalid('position') ? (
              <p data-testid={'position-error'}>Please select position</p>
            ) : null}
          </FormField>
          <FormField>
            <label htmlFor='status'>Select job status:</label>
            <select
              data-testid='status'
              name='status'
              className='status'
              onChange={changeHandler}
              onBlur={blurHandler}
              aria-describedby={
                isFieldInvalid('status') ? 'status-error' : undefined
              }>
              <option hidden>Select Job Status</option>
              <option value='interested'>interested</option>
              <option value='applied'>applied</option>
              <option value='phone-interview'>phone-interview</option>
              <option value='technical interview'>technical interview</option>
              <option value='declined'>declined</option>
              <option value='accepted'>accepted</option>
            </select>
            {isFieldInvalid('status') ? (
              <p data-testid={'status-error'}>
                Please select date of the application
              </p>
            ) : null}
          </FormField>
          <div className='calendar'>
            <label htmlFor='date_applied'>Select date of application</label>
            <FormField>
              <input
                data-testid='date_applied'
                className='applied'
                name='date_applied'
                type='date'
                onChange={changeHandler}
                onBlur={blurHandler}
                aria-describedby={
                  isFieldInvalid('date_applied')
                    ? 'date_applied-error'
                    : undefined
                }
              />
              {isFieldInvalid('date_applied') ? (
                <p data-testid={'date_applied-error'}>
                  Please select interview date
                </p>
              ) : null}
            </FormField>
          </div>
          <div className='calendar'>
            <label htmlFor='date_interview'>Select date of interview:</label>
            <FormField>
              <input
                data-testid='date_interview'
                className='interview'
                name='date_interview'
                type='datetime-local'
                onChange={changeHandler}
                onBlur={blurHandler}
                aria-describedby={
                  isFieldInvalid('date_interview')
                    ? '"date_interview-error'
                    : undefined
                }
              />
              {isFieldInvalid('date_interview') ? (
                <p data-testid={'date_interview-error'}>
                  Please select position
                </p>
              ) : null}
            </FormField>
          </div>
          <AddButton>
            <button className='add--btn' disabled={isFormInvalid()}>
              Add
            </button>
            <Link to={'/list'}>
              <button className='cancel--btn' disabled>
                Cancel
              </button>
            </Link>
          </AddButton>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default Add;
