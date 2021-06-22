const key = "5197fea25c654efba4e354bf8aa0afae"
const url = "http://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=5197fea25c654efba4e354bf8aa0afae"
const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
console.log(newsdata)
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
 
