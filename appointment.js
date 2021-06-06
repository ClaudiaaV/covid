

const container = document.querySelector('.getappoint');
const form = document.querySelector('form');

const createAppoint = async (e) => {
    e.preventDefault();

    const doc = {
        nume: form.nume.value,
        prenume: form.prenume.value,
        email: form.email.value,
        telefon:form.telefon.value,
        specialitate:form.specialitate.value,
        datan:form.datan.value,
        datac:form.datac.value,
        mesaj: form.mesaj.value
    }

await fetch('http://localhost:3000/programari',{
    method: 'POST',
    body: JSON.stringify(doc),
    headers:{'Content-type': 'application/json'}
})

let uri = 'http://localhost:3000/programari';


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

form.addEventListener('submit', createAppoint);
//  window.addEventListener( 'DOMContentLoaded', () => renderAppoint());