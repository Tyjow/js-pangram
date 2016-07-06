'use strict';


var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphalength = alphabet.length;
var test = prompt ("Venez tester votre pangram :", "The quick brown fox jumps over the lazy dog");
var i = 0;
var wrong=0;

    for (i; i <= alphalength; i++) {

    	var check = test.search(alphabet[i]);
        if (check < 0) {
            var wrong = wrong + 1;
        }
};
if (wrong > 0) {
	var done = "Ce n'est pas un pangram il y a " + wrong + " erreur(s)";
	alert (done);
} else {
	alert("Félicitation, c'est un pangram!")
}
