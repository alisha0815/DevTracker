import { Job } from '../interfaces';

const baseURL = `http://localhost:3000`;

const jobService = {
  async getAllJobs() {
    const response = await fetch(`${baseURL}/list`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
    if (response.status !== 200) {
      throw new Error('Error fetching data');
    }
    return response.json();
  },

  async createJob(job: Job) {

    const response = await fetch(`${baseURL}/add`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(job),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  },

  async updateJob(job: Job) {
    const { id, company, position, status, date_applied, date_interview } = job;

    return await fetch(`${baseURL}/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        company: company,
        position: position,
        status: status,
        date_applied: date_applied,
        date_interview: date_interview,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  // async updateJob(id, company, position, status, date_applied, date_interview) {
  //   console.log(company, position, status);
  //   return await fetch(`${baseURL}/edit/${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       company,
  //       position,
  //       status,
  //       date_applied,
  //       date_interview,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // },

  async deleteJob(id: string) {
    return await fetch(`${baseURL}/list/${id}`, {
      method: 'DELETE',
    });
  },
};

export default jobService;