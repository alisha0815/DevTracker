"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const jobsRouter_js_1 = __importDefault(require("./router/jobsRouter.js"));
const jobs_js_1 = require("./db/jobs.js");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use(morgan('tiny'));
app.use(jobsRouter_js_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
(0, jobs_js_1.connectDB)()
    .then(() => {
    console.log('Connected to the database!');
    app.listen(PORT, () => console.log(`Server running on http://localhost${PORT}`));
})
    .catch(console.error);
