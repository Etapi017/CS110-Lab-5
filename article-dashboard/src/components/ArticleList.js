import React from 'react';
import Article from './Article';
import styles from './ArticleList.module.css';

function ArticleList({ articles }) {
    return (
        <div className={styles.articleContainer}>
            {articles.map(article => <Article key={article.id} article={article} />)}
        </div>
    );
}

export default ArticleList;
