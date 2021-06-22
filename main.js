// console.log("This is my index js file");

// // Initialize the news api parameters
// let source = 'the-times-of-india';
// let apiKey = '490aee1a53fc4b73b49449b95608997d'

// // Grab the news container
// let newsAccordion = document.getElementById('newsAccordion');

// // Create an ajax get request
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// // What to do when response is ready
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element, index) {
//             // console.log(element, index)
//             let news = `<div class="card">
//                             <div class="card-header" id="heading${index}">
//                                 <h2 class="mb-0">
//                                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                                     aria-expanded="false" aria-controls="collapse${index}">
//                                    <b>Breaking News ${index+1}:</b> ${element["title"]}
//                                 </button>
//                                 </h2>
//                             </div>

//                             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                                 <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
//                             </div>
//                         </div>`;
//             newsHtml += news;
//         });
//         newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }

// xhr.send()


// const news = require('gnews');

// const main = async () => {
//     const starship = await news.search('Starship');
    
//     for (let article of starship) {
//         console.log(article.pubDate + ' | ' + article.title);
//     }
// };

// main();


const key = "490aee1a53fc4b73b49449b95608997d"

const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=${key}`

let i = 0;

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    
    newsdata.articles.forEach((article) => {
			totalResults: 5;
			//Here we create and add html elements to our html file
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
//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
