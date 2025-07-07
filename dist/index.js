"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const NewsRoutes_1 = __importDefault(require("./routes/NewsRoutes"));
const ussdRoutes_1 = __importDefault(require("./routes/ussdRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.get('/api/v1', (req, res) => {
    res.status(200).json({
        message: 'WELCOME TO AI POWERED NEWS_APP FROM SCRAPPING ONLINE NEWS 🚀🔥🔥'
    });
});
app.use('/api/v1', NewsRoutes_1.default);
app.use('/api/v1', ussdRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}🚀🚀 `);
});
