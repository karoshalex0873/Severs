import asyncHandler from "../middlewares/ayncHandler";
import { NextFunction, Request, Response } from "express";
import nodemailer from 'nodemailer'

export const sendNotification = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Creating a transporter
  const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
      user:'akarobia30@gmail.com',
      pass:'kponqescukhuopcd'
    }
  })
  
  const mailList= ['akarobia30@gmail.com','alex.njoki0873@gmail.com']
  // sending a message
  try {
    const info= await transporter.sendMail({
      from:'desic.dkut.ac.ke',
      to:mailList,
      subject:'Test',
      text:'testing broadcast email'
    })
    console.log("Message sent : %s",info.messageId)
    console.log('',nodemailer.getTestMessageUrl(info))  

    res.status(201).json({mesage:"Email sent ✔✔"})
  } catch (error) {
    console.error("Error while sending email",error)
  }
})