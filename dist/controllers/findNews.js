"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNews = void 0;
const ayncHandler_1 = __importDefault(require("../middlewares/ayncHandler"));
const newsService_1 = require("../services/newsService");
exports.findNews = (0, ayncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1 Topic 
        let { topic } = req.query;
        if (!topic || typeof topic !== 'string') {
            topic = 'latest';
        }
        // 2 Fetch news articles
        const articles = yield (0, newsService_1.fetchNewsArticles)(topic);
        if (!articles || articles.length < 1) {
            return res.status(404).json({
                message: "No news articles found"
            });
        }
        res.status(200).json({
            message: "News articles found successfully",
            data: articles
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}));
