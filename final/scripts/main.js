declare var Handlebars:any;
const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');
searchFrom.addEventListener('submit', retrieve);
function retrieve(e) {
    e.preventDefault();
    let topic = input.value;

    let url =`http://newsapi.org/v2/everything?q=${topic}&apiKey=7bd887589a4c40de8ef0fda2fd16c026`

    fetch(url).then((respuesta)=>{
        return respuesta.json()
    }).then((data)=>{
        console.log(data)
        const templateSource = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        const noticias = template(data)
        const gridnoticias = document.getElementById('news-container');
        gridnoticias.innerHTML = noticias;
    })
}
