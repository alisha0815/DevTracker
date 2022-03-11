const Express = require('express');
const router = require('../router/jobsRouter.js');
const supertest = require('supertest');
const Job = require('../model/jobs.js');

const mongoose = require('mongoose');

describe('Integration tests', ()=> {

  const app = Express(); 
  app.use(Express.json()); 
  app.use(router); 
  const request = supertest(app); 

  beforeAll(async () => {
    const url =  process.env.DB_MONGO_TEST
    await mongoose.connect(url);

    

  })

})
