import Express from 'express';
import supertest from 'supertest';
import mongoose from 'mongoose';
import jobsRouter from '../../router/jobsRouter.js'

describe('Integration tests', ()=> {
  
  it('test if it works', ()=> {
    expect(true).toEqual(true); 
  })
  
  const app = Express(); 
  app.use(Express.json()); 
  app.use(jobsRouter)
  const request = supertest(app); 
  
  beforeAll(async () => {
    const url =  'mongodb://localhost:27017/DevTrackerTest'
    await mongoose.connect(url);
  })
  
  afterAll(()=>{
    mongoose.disconnect(); 
  })

    it('Returns status code 200 if new job is passed', async()=> {
      const res = await request.post('/add').send({
          "company": "Test Company",
          "position": "backend",
          "status": "technical interview",
          "date_applied": null,
          "date_interview": "2022-03-09T05:57:22.785Z",
          "createdAt": "2022-03-11T15:26:05.347Z",
      })
      // console.log('RES ---->', res)
      expect(res.statusCode).toEqual(200)
      
    })
  
})
