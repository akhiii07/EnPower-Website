const key = "490aee1a53fc4b73b49449b95608997d"
const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    
    newsdata.articles.forEach((article) => {
			
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `
        <ul>
            <li>
          <div class="grid-2-1">  
            <a href="${article.url}"> <h2 news-api-link style="color: #fafafa; font-size: 25px; position: relative;top: 50%;transform: translateY(-50%);">${article.title}</h2> </a>
          
            <img src="${article.urlToImage}" class="news-api-img">
          </div>  
            </li>
        </ul>`
      articlesDiv.appendChild(div)
    })
  }
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
