import express from  'express'
import { sendNotification } from '../controllers/notifications'

const router=express.Router()

router.post('/mail',sendNotification)

export default router