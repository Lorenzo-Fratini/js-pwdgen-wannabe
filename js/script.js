// restituire nome
var name = prompt('inserisci il tuo nome:');
var surname = prompt('inserisci il tuo cognome:');;
var color = prompt('inserisci il tuo colore preferito:');
// console.log(name, surname, color);

document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('color').innerHTML = color;
