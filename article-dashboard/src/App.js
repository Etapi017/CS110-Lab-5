import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ArticleList from './components/ArticleList';
//import Article from './components/Article';
import styles from './App.module.css';
import { fetchArticles } from './services/apiService';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ type: 'mostViewed', period: '7' });

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchArticles(filter.type, filter.period)
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch articles:', error);
        setError('Failed to load articles.');
        setLoading(false);
      });
  }, [filter]);

  const handleFilterChange = (type, value) => {
    setFilter(prev => ({ ...prev, [type]: value }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.App}>
      <Sidebar onFilterChange={handleFilterChange} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
