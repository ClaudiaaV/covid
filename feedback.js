function getFeedback() {
    const api = `http://localhost:8000/feedbacks`


    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let feedbacks = data
            let HTML = `<div>`
            apiLength = feedbacks.length + 1

            for (let feedback of feedbacks) {
                HTML += `<br>`
                HTML += `<h2> <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/feedback-42-496804.png" style="height:60px;width:60px;opacity:79%;"</h2>`
                HTML += `<br>`
                HTML += `<br>`
                HTML += `<p style="font-size:19px;">Rating Acordat:<strong><i> ${feedback.rating}</i></strong></p>`
                HTML += `<p style="font-size:15px;">Comentarii:  ${feedback.mesaj}</p>`
                HTML += `<hr>`
            }
            HTML += `</div>`
            document.getElementById("injected").innerHTML = HTML;
        })
}
getFeedback()




