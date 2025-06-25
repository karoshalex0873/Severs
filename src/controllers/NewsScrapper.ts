import { Request,Response } from "express"
// scrapper controller
export const  scrapeTechNews = async( req:Request, res:Response)=>{
  res.status(200).json({
    message: "Scraping Tech News",
  })
  
}
