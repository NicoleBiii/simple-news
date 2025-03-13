import { useEffect, useState } from 'react';
import { fetchArticles, fetchSummary } from './api/ApiService';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [news, setNews] = useState([]);
  const [summaries, setSummaries] = useState({});

  // Fetch news articles
  useEffect(() => {
    const getNews = async () => {
      const resp = await fetchArticles();
      setNews(resp.articles);
    };
    getNews();
  }, []);

  // Fetch summary for a single article when clicked
  const handleFetchSummary = async (index, title, description) => {
    try {
      const summary = await fetchSummary(title, description);
      setSummaries((prevSummaries) => ({
        ...prevSummaries,
        [index]: summary,
      }));
    } catch (error) {
      // If the request fails, show an error message
      setSummaries((prevSummaries) => ({
        ...prevSummaries,
        [index]: "Error fetching summary",
      }));
      console.error('Error fetching summary:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <section className='news-section'>
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage} alt="newsImage" className="news-card__image" />
            <h2 className="news-card__title">{article.title}</h2>
            <p className="news-card__description">{article.description}</p>
            <button 
            onClick={() => handleFetchSummary(index, article.title, article.description)}
            className="news-card__button">
              Discuss with us!
            </button>
            <p  className="news-card__summary">{summaries[index] || "Click 'Discuss with us' to get a topic!"}</p>
          </div>
        ))
      ) : (
        <p>Loading news...</p>
      )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
