const nodeList=document.querySelectorAll('ul li');
var itemsContainer=document.querySelector('.items-container');

let liElements = Array.from(nodeList);

for(let i=0;i<liElements.length;i++)
{
    liElements[i].addEventListener('click',function(){
        getNews(liElements[i].getAttribute('li-data'))
    });
}

var items=[];
async function getNews(category) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=b75591e323d4455794a9442f3e72d5a1`);
    let json = await response.json(); // Await the json() method call
    items = json.articles;
    displayElement();
}

function displayElement()
{
    let container=``;
    for(let i=0;i<items.length;i++)
    {
        container+=`
            <div class="card col-md-6 col-lg-4 mb-2 p-3 " >
                <div class="card-body">
                    <h5 class="card-title"> ${items[i].author} </h5>
                    <p class="card-text lead">${items[i].title}</p>
                    <p class="card-text lead">Published at : ${items[i].publishedAt}</p>
                    <a href="${items[i].url}"  target="_blank" class="btn btn-outline-primary d-block">Visit Site</a>
                </div>
             </div>
          `
    } 
    itemsContainer.innerHTML=container;
}






