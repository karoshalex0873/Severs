// controller to find news articles from a any online source
import { Request, Response } from "express";
import asyncHandler from "../middlewares/ayncHandler";
import { fetchNewsArticles } from "../services/newsService";

export const findNews = asyncHandler(async (req: Request, res: Response) => {
  try {
    // 1 Topic 
    let { topic } = req.query;

    if (!topic || typeof topic !== 'string'){
      topic= 'latest'
    }
    // 2 Fetch news articles
    const articles = await fetchNewsArticles(topic as string)

    if (!articles || articles.length < 1) {
      return res.status(404).json({
        message: "No news articles found"
      });
    }

    res.status(200).json({
      message: "News articles found successfully",
      data: articles
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error"
    })
  }
})