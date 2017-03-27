let $name, $email, $comments, $contactForm;

const API_URL = 'https://b4651037-d05a-4b7d-ab46-1e9a1abc096f-gws.api-gw.mybluemix.net/api/v1/email/test';

document.addEventListener('DOMContentLoaded', init, false);

function init() {
    $name = document.querySelector('#name');
    $email = document.querySelector('#email');
    $comments = document.querySelector('#comments');
    $contactForm = document.querySelector('#contactForm');

    $contactForm.addEventListener('submit', processForm, false);
}

function processForm(e) {
    console.log('processForm ftw');
    e.preventDefault();

    /*
     create a structure of form data to send to the api
     */
    let data = {
        name:$name.value,
        _from:$email.value,
        _subject:"My Cool Contact Form",
        comments:$comments.value
    };

    fetch(API_URL, {
        method:'POST',
        mode:'cors',
        body:JSON.stringify(data)
    }).then((res) => {
        return res.json();
}).then( (result) => {
        console.log('result was '+JSON.stringify(result));
    if(result.result === 'Ok') {
        $comments.value='';
        alert("Thanks for the awesome comments!");
    } else {
        alert("Sorry, something went wrong.");
    }
});
}