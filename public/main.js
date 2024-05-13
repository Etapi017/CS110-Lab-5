//main.js begins
document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.querySelector('.article-container');
    const apiKey = 'KtdAxMvdsmo0lF65Qj2i8QRfUUBgJINf';
    const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/';

    // Add search field above radio buttons
    const searchInput = document.createElement('input');
    searchInput.type = 'number';
    searchInput.id = 'searchField';
    searchInput.placeholder = 'Enter a number...';
    const sidebar = document.querySelector('.sidebar');
    sidebar.insertBefore(searchInput, sidebar.firstChild);

    // Event listener for the search input field
    searchInput.addEventListener('input', function(event) {
        const value = parseInt(event.target.value, 10);
        if (value > 15) {
            alert('Number is higher than 15');
        }
    });

    // Fetch and display articles
    function loadArticles(type, period) {
        const url = buildUrl(type, period);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => displayArticles(data.results))
            .catch(error => {
                console.error('Error fetching data:', error);
                displayError();
            });
    }

    function updateTitle(type, period) {
        const typeText = type === 'mostViewed' ? 'Most Viewed' : type === 'mostShared' ? 'Most Shared' : 'Most Emailed';
        const periodText = period === '1' ? 'Day' : period === '7' ? 'Week' : '30' ? 'Month' : 'Timeframe Error';
        const titleElement = document.getElementById('title');
        if (titleElement) {
            titleElement.textContent = `${typeText} - ${periodText}`;
        } else {
            console.error('Title element not found');
        }
    }

    // Display error for articles
    function displayError() {
        articlesContainer.innerHTML = '<div class="article"><h1>Article not available</h1><p>Error fetching article.</p></div>';
    }

    // URL for the API request
    function buildUrl(type, period) {
        let endpoint = type === 'mostViewed' ? `viewed/${period}.json` :
                       type === 'mostEmailed' ? `emailed/${period}.json` :
                       `shared/${period}/facebook.json`; // default to mostShared
        return `${baseUrl}${endpoint}?api-key=${apiKey}`;
    }

    // DOM with fetched articles
    function displayArticles(articles) {
        articlesContainer.innerHTML = '';
        articles.slice(0,15).forEach((article, index) => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'article';
            articleDiv.innerHTML = `
                <div class="article-header">
                    <h3 class="article-title">${index + 1}) ${article.title}</h3>
                    <span class="article-date">${new Date(article.published_date).toLocaleDateString()}</span>
                </div>
                <div class="article-content">
                    <img src="${getArticleImageUrl(article)}" alt="${article.title}" class="article-image">
                    <p class="article-abstract">${article.abstract}</p>
                </div>
            `;
            articlesContainer.appendChild(articleDiv);
        });
    }

    // Function to get the article image URL or a placeholder if unavailable
    function getArticleImageUrl(article) {
        return article.media && article.media.length > 0 && article.media[0]['media-metadata'] ?
               article.media[0]['media-metadata'][0].url : 'placeholder.jpg';
    }

    // Event listeners for filter
    document.querySelectorAll('input[name="sort"], input[name="time"]').forEach(input => {
        input.addEventListener('change', () => {
            const period = document.querySelector('input[name="time"]:checked').value;
            const sortType = document.querySelector('input[name="sort"]:checked').value;
            loadArticles(sortType, period);
        });
    });

    loadArticles('mostViewed', '1');
});
//main.js ends
