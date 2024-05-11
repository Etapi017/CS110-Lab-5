import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ArticleList from './components/ArticleList';
import styles from './App.module.css';
import { fetchArticles } from './services/apiService'; // Make sure the path is correct

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Start loading
    setError(null); // Reset errors

    fetchArticles('mostViewed', '7') // Example parameters
      .then(data => {
        setArticles(data);
        setLoading(false); // Stop loading on success
      })
      .catch(error => {
        console.error('Failed to fetch articles:', error);
        setError('Failed to load articles.'); // Set error message
        setLoading(false); // Stop loading on error
      });
  }, []);

  if (loading) return <p>Loading...</p>; // Display loading indicator
  if (error) return <p>Error: {error}</p>; // Display error message

  return (
    <div className={styles.App}>
      <Sidebar />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
