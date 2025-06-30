import axios from "axios"
import dotenv from 'dotenv'
dotenv.config()

const BASE_URL = "https://newsapi.org/v2/everything"
const API_KEY = process.env.NEWS_API_KEY

export const fetchNewsArticles= (async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: query,
        language: "en",
        sortBy: "relevancy",
        apiKey: API_KEY
      }
    })
    console.log("API KEY:", API_KEY);
    return response.data.articles
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch news articles")
  }
})