"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes
const express_1 = __importDefault(require("express"));
const findNews_1 = require("../controllers/findNews");
const router = express_1.default.Router();
router.get('/news', findNews_1.findNews);
exports.default = router;
