

const div = document.querySelector('.pls');

const createFeedback = async (e) => {
    e.preventDefault();

    const doc = {
        rating: div.rating.value,
        mesaj: div.mesaj.value
        
    }

await fetch('http://localhost:8000/feedbacks',{
    method: 'POST',
    body: JSON.stringify(doc),
    headers:{'Content-type': 'application/json'}
})

let uri = 'http://localhost:8000/feedbacks';


}

/* const renderAppoint = async () => {
let uri = 'http://localhost:3000/programari';

const res = await fetch(uri);
const appoint = await res.json();
console.log(appoint);

let template = '';
appoint.forEach(app => {
    template += `
        <div class="app">
            <h2>${app.name}</h2>
            <p>${app.message}</p> 
        </div>
    `

})

container.innerHTML = template;


} */

div.addEventListener('submit', createFeedback);
//  window.addEventListener( 'DOMContentLoaded', () => renderAppoint());