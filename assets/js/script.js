//chiedi il cognome
var userLastname = prompt("Inserischi il tuo cognome");

//array con altri cognomi e inserisci quello
var lastnameArray = [
  "caldart",
  "andreotti",
  "spreafico",
  "friguglietti",
  "nava",
  "belingheri",
  "fumagalli",
  "brivio",
  "giovinazzi"
]
lastnameArray.push(userLastname);

//ordina alfabeticamente e stampa
lastnameArray.sort();

for ( var i = 0; i < lastnameArray.length; i++ ) {

  var listElement = lastnameArray[i];
  var lastElement = document.getElementById('list').innerHTML;
  document.getElementById('list').innerHTML = lastElement + "<li>" + listElement + "</li>";

}

//dove si trova il cognome?

var userLastnameFound = false;
var counter = 0
var userLastnamePosition = "Il tuo cognome si trova alla posizione numero: ";

while ( userLastnameFound === false ) {

  if( userLastname === lastnameArray[counter] ){
    userLastnameFound = true;
    counter++;
    userLastnamePosition += counter;
    document.getElementById('position').innerHTML = userLastnamePosition;
  }
  counter++;

}