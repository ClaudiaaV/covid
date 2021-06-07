
const form = document.querySelector('form');

const createFeedback = async (e) => {
    console.log(e)
    e.preventDefault();

    const doc = {
        rating: form.rating.value,
        mesaj: form.mesaj.value
    }

    console.log(doc)

    await fetch('http://localhost:8000/feedbacks', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-type': 'application/json' }
    })

}

form.addEventListener('submit', createFeedback);






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


//  window.addEventListener( 'DOMContentLoaded', () => renderAppoint());