import { Request, Response } from "express";

const accountBalance = 1000;

export const ussdController = async (req: Request, res: Response) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";

  if (text === "") {
    response = `CON Welcome to my first USSD request\n1. Check Account Balance\n2. Exit`;
  } else if (text === "1") {
    response = `END Your balance is ${accountBalance}`;
  } else if (text === "2") {
    response = `END Thank you for using my first USSD request`;
  } else {
    response = `END Invalid option. Please try again.`;
  }

  res.set("Content-Type", "text/plain");
  res.status(200).send(response);
};
