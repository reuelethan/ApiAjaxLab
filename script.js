// alert()
fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    let bodyEl = document.querySelector("body"); //selects body
    let children = data.data.children;
    console.log(children);
    for (let index = 0; index < children.length; index++) {
      bodyEl.innerHTML += `
            <article>
            <header class="title">${children[index].data.title}</header>
            <br> 
            <img src="${children[index].data.thumbnail}">
            <br>
            <p> Link is ${children[index].data.url} </p>
            </article>
            
            
            `;
    }

    // let addArticle = document.createElement("article"); //function that makes a div

    // let articleEl = document.querySelector("article"); // selects the article
    // let addSection = document.createElement("section"); //adds

    // articleEl.appendChild(addSection);

    // addArticle.classList.add("title");
    // addArticle.innerText = data.data.children[0].data.title;

    console.log(data.data.children[0].data.title); //logs title of index 0
    console.log(data.data.children[0].data.thumbnail); // logs thumbnail of index 0
    console.log(data.data.children[0].data.url); //logs the url of index 0
  });
