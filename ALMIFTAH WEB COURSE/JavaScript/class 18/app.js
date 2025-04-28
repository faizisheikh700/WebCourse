let getData = document.getElementById('getData');

fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=99bd98887a5245f78e5d8fcf9fdb076e')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.articles && data.articles.length > 0) {
          for (let i = 0; i < data.articles.length; i++) {
            getData.innerHTML += `
          <div class="mainDiv" >
          <div class="cardImgDiv">
            <img src="${data.articles[i].urlToImage}" class="cardImg" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card">${data.articles[i].title}</h5>
              <p class="card-text">${data.articles[i].description}</p>
              <a href="${data.articles[i].url}" class="btn btn-primary" target="_blank">Read more</a>
            </div>
          </div>`;
        } 
      }else {
            getData.innerHTML += `<h1>No articles found</h1>`;
        }
    })
    .catch(err => console.log(err));