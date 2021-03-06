const baseURL = `http://localhost:3040`;

export const jobService = {
  async getAllJobs() {
    const response = await fetch(`${baseURL}/list`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    if (response.status !== 200) {
      throw new Error("Error fetching data");
    }
    return response.json();
  },

  async createJob(company, position, status, date_applied, date_interview) {
    const response = await fetch(`${baseURL}/add`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        company: company,
        position: position,
        status: status,
        date_applied: date_applied,
        date_interview: date_interview,
      }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  },

  async updateJob(id, company, position, status, date_applied, date_interview) {
    console.log(company, position, status);
    return await fetch(`${baseURL}/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        company,
        position,
        status,
        date_applied,
        date_interview,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async deleteJob(id) {
    return await fetch(`${baseURL}/list/${id}`, {
      method: "DELETE",
    });
  },
};
