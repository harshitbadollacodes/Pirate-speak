const userInput = document.querySelector('.input-text');
const button = document.querySelector('.btn');
const output = document.querySelector('.output');

const url = `https://api.funtranslations.com/translate/pirate.json`;

function convert() {
    fetch(`${url}?text=${userInput.value}`)
    .then(repsonse => repsonse.json())
    .then(json => {
        output.innerText = json.contents.translated;
    })
    .catch(() => alert('Some error occured. Please try after sometime'));
};

button.addEventListener('click', convert);