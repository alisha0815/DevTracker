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

  async createJob(company, position, status) {
    const response = await fetch(`${baseURL}/add`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        company: company,
        position: position,
        status: status,
      }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  },
};