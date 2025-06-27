import { Request, Response } from "express";

const accountBalance = 1000;

export const ussdController = async (req: Request, res: Response) => {

  const { sessionId, serviceCode, phoneNumber, text, } = req.body;

  let response = "";

  if (text == '') {

  } else if (text == '1') {
    response = `CON Choose account information you want to view
    1. Account number`;
  } else if (text == '2') {
    response = `END Your phone number is ${phoneNumber}`;
  } else if (text == '1*1') {
    const accountNumber = 'ACC100101';
    response = `END Your account number is ${accountNumber}`;
  }
  res.set("Content-Type", "text/plain");
  res.status(200).send(response);
};
