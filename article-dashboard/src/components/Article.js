import React from 'react';
import styles from './Article.module.css';

function Article({ article }) {
    return (
        <div className={styles.article}>
            <div className={styles.articleHeader}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <span className={styles.articleDate}>{new Date(article.published_date).toLocaleDateString()}</span>
            </div>
            <div className={styles.articleContent}>
                <img src={article.mediaUrl} alt={article.title} className={styles.articleImage} />
                <p className={styles.articleAbstract}>{article.abstract}</p>
            </div>
        </div>
    );
}

export default Article;
