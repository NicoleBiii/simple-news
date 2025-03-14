import axios from "axios";
const BASE_URL = "https://newsapi.org/v2/top-headlines?sources=bbc-news";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL_AI = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY_AI = import.meta.env.VITE_API_KEY_AI;

export const fetchArticles = async () => {
    try {
        const resp = await axios.get(
            `${BASE_URL}&apiKey=${API_KEY}`
        );
        return resp.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch articles");
    }
}

export const fetchSummary = async (title, description) => {
    try {
        const prompt = `Based on the following news title and description, generate one single, easy, thought-provoking discussion topic for all people.' \nTitle: ${title}\nDescription: ${description}`;

        const response = await axios.post(
            `${BASE_URL_AI}?key=${API_KEY_AI}`, {
                "contents": [{
                    "parts":[{"text": prompt}]
                }]
            }
        )
        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.log(error);
        alert('Failed to fetch summary. Please try again.');
    }
}