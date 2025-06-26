import { Request, Response } from "express"
const accountBalance = 1000

// USSD Controller
export const ussdController = async (req: Request, res: Response) => {

  const { sessionId, serviceCode, phoneNumber, text } = req.body

  let response = ''

  if (text === '') {
    // Menu
    response = `CON Welcome my first USSD request
    1. Check Account Balance
    2. Exit`
  } else if (text === '1') {
    response = `Your Request has been sent successfully \n your balance is ${accountBalance}`
  }
  else if (text === '2') {
    response = `Thank you for using my first USSD request`
  } else {
    response = `END Invalid option. Please try again.`
  }

  res.set('Content-Type', 'text/plain');
  res.status(200).send(response);
}