//Variables Selectoras
const range = document.querySelector('#range');
const emoticon = document.querySelector('#emoticon');
const label = document.querySelector('#label');
const container = document.querySelector('.container-fluid');
console.log(container);

//Variables
const emojis = ['&#x1F600;', '&#x1F642;', '&#x1F610', '&#x1F615', '&#x1F625', '&#x1F620', '&#x1F621'];
const mood = ['Feliz!!', 'Bien!!', 'Normal!!', 'Indesiza...', 'Triste...', 'Enojada!!', 'Muy Enojada'];
const colores = ['#0fbc2a', '#118644', '#e3a606', '#ff6700', 'grey', '#9b0000'];

console.log(range.value);
//Eventlisteners

range.addEventListener('input', getValor);


//funciones

function getValor() {


    let valor = range.value;

    console.log(valor);
    emoticon.innerHTML = emojis[valor];
    label.innerHTML = mood[valor];
    container.style.backgroundColor = colores[valor];


}