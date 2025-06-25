// routes
import express from 'express';
import { scrapeTechNews } from '../controllers/NewsScrapper';
const router=express.Router()

router.get('/news',scrapeTechNews)

export default router