// ArticleList.js
import React from 'react';
import Article from './Article';
import styles from './ArticleList.module.css';

function ArticleList({ articles }) {
    return (
        <div className={styles.articleContainer}>
            {articles.map((article, index) => (
                article ? <Article key={article.id || index} article={article} /> :
                <div key={index} className={styles.article}>
                    <div className={styles.articleHeader}>
                        <h3 className={styles.articleTitle}>Article not available</h3>
                        <span className={styles.articleDate}>N/A</span>
                    </div>
                    <div className={styles.articleContent}>
                        <img src="placeholder.jpg" alt="Not available" className={styles.articleImage} />
                        <p className={styles.articleAbstract}>This article could not be loaded.</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;
