# AI-Powered News Discussion  

This project is a simple news webpage built with React, developed during a BrainStation hackathon in collaboration with Lara Woronowicz. It integrates Google Gemini AI to generate discussion topics for each news article, enhancing user engagement and sparking meaningful conversations.  

## Features  
- Displays the latest news articles.  
- Uses Google Gemini AI to generate discussion topics based on the article content.  
- Allows users to refresh the discussion topic with a button click for new insights.  

## Tech Stack  
- **Frontend**: React  
- **AI Integration**: Google Gemini AI  
- **News API**: [NewsAPI](https://newsapi.org/)  

## Setup Instructions  

### 1. Get API Keys  
To run the project locally, you need to obtain API keys for:  
- **News API**: Sign up at [NewsAPI](https://newsapi.org/docs/endpoints/top-headlines) and get an API key.  
- **Google Gemini AI**: Obtain an API key from Google's Gemini AI platform.  

### 2. Set Up Environment Variables  
Create a `.env` file in the root directory and add your API keys:  

```env
API_KEY=your_news_api_key
API_KEY_AI=your_gemini_api_key
```
### 3. Install Dependencies  
Run the following command to install all required dependencies:  

```sh
npm install
```

### 4. Run the Project

```terminal
npm run dev
```

