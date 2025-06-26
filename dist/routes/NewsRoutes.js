"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes
const express_1 = __importDefault(require("express"));
const NewsScrapper_1 = require("../controllers/NewsScrapper");
const router = express_1.default.Router();
router.get('/news', NewsScrapper_1.scrapeTechNews);
exports.default = router;
