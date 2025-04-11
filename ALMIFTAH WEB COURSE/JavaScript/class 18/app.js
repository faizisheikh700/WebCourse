let getData = document.getElementById('getData');

fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-03-09&sortBy=publishedAt&apiKey=99bd98887a5245f78e5d8fcf9fdb076e')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.articles && data.articles.length > 0) {
            getData.innerHTML += `<h1>${data.articles[0].title}</h1>`;
        } else {
            getData.innerHTML += `<h1>No articles found</h1>`;
        }
    })
    .catch(err => console.log(err));