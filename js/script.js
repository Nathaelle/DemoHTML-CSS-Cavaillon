/* Rappels opérateurs logiques :
    ----!-NON---- Priorité [1]
   !true = false
   !false = true
    ---&&--ET---- Priorité [2]
   false && false = false
   false && true = false
   true && false = false
   true && true = true
    ---||--OU---- Priorité [3]
   false || false = false
   false || true = true
   true || false = true
   true || true = true
*/
var a = false;
var b = false;
var c = true;

// Renverra "VRAI" car par priorité des opérateurs
// a && b || c <=> (a && b) || c
//                   false     true
if(a && b || c) {
    console.log("VRAI")
} else {
    console.log("FAUX")
}

// Renverra "FAUX" car par priorité des parenthèses
//   a && (b || c) 
// false   true
if(a && (b || c)) {
    console.log("VRAI")
} else {
    console.log("FAUX")
}