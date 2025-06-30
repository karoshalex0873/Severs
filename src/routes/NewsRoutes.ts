// routes
import express from 'express';
import { findNews } from '../controllers/findNews';
const router=express.Router()

router.get('/news', findNews)

export default router