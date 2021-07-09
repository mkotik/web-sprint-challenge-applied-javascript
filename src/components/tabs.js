import axios from "axios";
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // instantiate the tab element, add class
  const tab = document.createElement("div");
  tab.classList.add("topics");

  // loop over the topics array, create elements, append into tab
  topics.forEach((cur) => {
    const element = document.createElement("div");
    element.classList.add("tab");
    element.textContent = cur;
    tab.appendChild(element);
  });

  return tab;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
    .get("http://localhost:5000/api/topics")
    .then((response) => {
      const element = Tabs(response.data.topics);
      document.querySelector(selector).appendChild(element);
    })
    .catch((error) => console.log(error));
};

export { Tabs, tabsAppender };
