import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // instantiate the elements;
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const writtenBy = document.createElement("span");

  // add class names and text content
  card.classList.add("card");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  img.src = article.authorPhoto;
  writtenBy.textContent = article.authorName;

  // assemble the elements;
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(writtenBy);
  card.appendChild(headline);
  card.appendChild(author);

  // adding event listeners
  card.addEventListener("click", function () {
    console.log(card.querySelector(".headline").textContent);
  });

  return card;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
    .get("http://localhost:5000/api/articles")
    .then((response) => {
      const articles = response.data.articles;
      articles.bootstrap.forEach((cur) => {
        const card = Card(cur);
        document.querySelector(selector).appendChild(card);
      });
      articles.javascript.forEach((cur) => {
        const card = Card(cur);
        document.querySelector(selector).appendChild(card);
      });
      articles.jquery.forEach((cur) => {
        const card = Card(cur);
        document.querySelector(selector).appendChild(card);
      });
      articles.node.forEach((cur) => {
        const card = Card(cur);
        document.querySelector(selector).appendChild(card);
      });
      articles.technology.forEach((cur) => {
        const card = Card(cur);
        document.querySelector(selector).appendChild(card);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export { Card, cardAppender };
