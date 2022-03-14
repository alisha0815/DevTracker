"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
const jobsRouter_1 = __importDefault(require("../../router/jobsRouter"));
describe('End to End tests', () => {
    it('Should work if testing is ok', () => {
        expect(true).toEqual(true);
    });
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(jobsRouter_1.default);
    const request = (0, supertest_1.default)(app);
    beforeAll(async () => {
        const url = 'mongodb://localhost:27017/DevTrackerTest';
        await mongoose_1.default.connect(url);
    });
    afterAll(() => {
        mongoose_1.default.disconnect();
    });
    const mockCompany = {
        company: 'Test Mocked Company',
        position: 'backend',
        status: 'technical interview',
        date_applied: null,
        date_interview: '2022-03-09T05:57:22.785Z',
        createdAt: '2022-03-11T15:26:05.347Z',
    };
    const mockRequest = {
        body: {
            company: 'Change Company name',
        },
    };
    const incompleteData = {
        position: 'backend',
    };
    let jobId = '';
    let wrongId = 'wrong4890983id098';
    it('Returns status code 200 if new job is added to the database', async () => {
        const res = await request.post('/add').send(mockCompany);
        expect(res.statusCode).toEqual(200);
    });
    it('Returns status code 404 if the post request information is incomplete', async () => {
        const res = await request.post('/add').send(incompleteData);
        console.log(res.statusCode, '<-------- STAT CODE');
        expect(res.statusCode).toEqual(404);
    });
    it('Returns jobs in json format', async () => {
        const res = await request.get('/list');
        jobId = await res.body[0]._id;
        expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
    });
    it('Returns jobs as an Object', async () => {
        const res = await request.get('/list');
        expect(typeof res).toBe('object');
    });
    // it("Sould PUT Company's information using id", async () => {
    //   const put = await request.put(`/edit/${jobId}`, {
    //     company: 'Change Company name',
    //   });
    //   expect(put.statusCode).toEqual(200);
    // });
    // it("Sould  not PUT Company's information if the id is wrong", async () => {
    //   const put = await request.put(`/edit/${wrongId}`, {
    //     company: 'Change Company name',
    //   } as Request);
    //   expect(put.statusCode).toEqual(500);
    // });
    it("Sould PUT Company's information using id", async () => {
        const put = await request.put(`/edit/${jobId}`).send(mockRequest);
        expect(put.statusCode).toEqual(200);
    });
    it("Sould  not PUT Company's information if the id is wrong", async () => {
        const put = await request.put(`/edit/${wrongId}`).send(mockRequest);
        expect(put.statusCode).toEqual(500);
    });
    it('Sould delete the Company with id', async () => {
        const del = await request.delete(`/deletelist/${jobId}`);
        expect(del.statusCode).toEqual(204);
    });
    it('Should not delete unexistant Company', async () => {
        const del = await request.delete(`/deletelist/${wrongId}`);
        expect(del.statusCode).toEqual(500);
    });
    it('Should return undefined Company Id if the database is empty', async () => {
        const res = await request.get('/list');
        expect(res.body._id).toBe(undefined);
    });
});
