import express from 'express'
import { ussdController } from '../controllers/ussd'

const router=express.Router()

router.post('/ussd',ussdController)

export default router