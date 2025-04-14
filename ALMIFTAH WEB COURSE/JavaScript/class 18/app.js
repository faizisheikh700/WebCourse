let getData = document.getElementById('getData');

fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=99bd98887a5245f78e5d8fcf9fdb076e')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.articles && data.articles.length > 0) {
            getData.innerHTML += `
          <div class="card m-3" style="width: 18rem;">
            <img src="${data.articles[0].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.articles[0].title}</h5>
              <p class="card-text">${data.articles[0].description}</p>
              <a href="${data.articles[0].url}" class="btn btn-primary" target="_blank">Read more</a>
            </div>
          </div>`;
        } else {
            getData.innerHTML += `<h1>No articles found</h1>`;
        }
    })
    .catch(err => console.log(err));