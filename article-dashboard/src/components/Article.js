import React from 'react';

function Article({ article }) {
    return (
        <div className="article">
            <div className="article-header">
                <h3 className="article-title">{article.title}</h3>
                <span className="article-date">{new Date(article.published_date).toLocaleDateString()}</span>
            </div>
            <div className="article-content">
                <img src={article.mediaUrl} alt={article.title} className="article-image" />
                <p className="article-abstract">{article.abstract}</p>
            </div>
        </div>
    );
}

export default Article;
