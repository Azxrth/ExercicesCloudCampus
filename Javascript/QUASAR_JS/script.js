/* Exercice 1
let prenom = prompt("Veuillez entrer un premier prénom");
let secondprenom = prompt("Veuillez entrer un second prénom");
let etat = prompt("Veuillez entrer un premier état du jour");
let secondetat = prompt("Veuillez entrer un second état du jour");
let heure = prompt("Veuillez entrer une heure");
let jour = prompt("Veuillez entrer un jour");

console.log(prenom+" : Bonjour !");
console.log(secondprenom+" : Bonjour "+prenom+" ! Comment vas-tu ?");
console.log(prenom+" : "+etat+ " , et toi ?");
console.log(secondprenom+" : "+secondetat+" , je te remercie")
console.log(prenom+" : Quelle heure est-t-il ? ")
console.log(secondprenom+": Il est "+heure+" heures.")
console.log(prenom+" : D'acc, merci.")
console.log(secondprenom+" : Où manges-tu aujourd’hui ?")
console.log(prenom+" : Je rentre chez moi comme tous les "+jour+"s")
console.log(secondprenom+" : D'acc") */

/* Ecercice 2
let age = prompt("Veuillez entrer votre age");

if (age < 18 )
 {
    console.log("Vous êtes mineur");
 }
 else if ( age => 18 && age < 21)
 {
    console.log("Hey ! Vous êtes majeur !, mais pas internationalement")
 }
 else 
 {
    console.log("Hey ! Vous êtes majeur partout dans le monde !")
 } 
*/
/* Exercice 3
let A = prompt("Veuillez saisir la valeur A");
let B = prompt("Veuillez saisir la valeur B");
let C = prompt("Veuillez saisir la valeur C");

if (A==B && B==C)
{
    console.log("Les 3 valeurs saisies sont les mêmes")
}
else if (A == B || B == C || A == C) {
    if (A == B) {
        message = "les valeurs A et B sont les mêmes";
    }
    if (B == C) {
        message = "Les valeurs B et C sont les mêmes";
    }
    if (A == C) {
        message = "Les valeurs A et C sont les mêmes";
    }
    console.log(message);   
} 
else {
    console.log("Les trois valeurs sont toutes différentes.");
} */

/* Exercice 4
let num =  parseInt(prompt("Saisissez un chiffre entre 0 et 10"))
let i =  0;

if(num > 10 )
{
    console.log("Vous êtes trop gourmand");
}
else{
    while(i<=num)
    {
        console.log(i+"->"+i*2)
        i++;
    }
}*/

/* Exercice 5
let num =  parseInt(prompt("Saisissez un nombre"));
let pairoupas = prompt("pair ou impair")

if(pairoupas == "pair")
{
    for (let i = 0; i <= num; i += 2)
    {
        console.log(i)
    }
}
else if(pairoupas == "impair")
{
    for (let i = 1; i <= num; i += 2)
        {
            console.log(i)
        }
}
else
{
    console.log("vous avez mal saisi votre deuxieme réponse")
} */

/* Exercice 6
function marioPyramid(etages) {
    for (let i = 1; i <= etages; i++) {
        console.log("#".repeat(i));
    }
}

let userInput = prompt("Combien d’étages veux-tu ?");
marioPyramid(userInput);
*/      
/* Exercice 7
function happyBirthday(dateAnniv) {
    let [jourAnniv, moisAnniv] = dateAnniv.split("/");
  
    let aujourdHui = new Date();
    let jourActuel = aujourdHui.getDate().toString().padStart(2, "0");
    let moisActuel = (aujourdHui.getMonth() + 1).toString().padStart(2, "0");
  
    if (jourAnniv === jourActuel && moisAnniv === moisActuel) {
      console.log("Joyeux anniversaire ! Tu obtiens une promotion de 30% sur tous les articles !");
    } else {
      console.log("En ce moment, une promotion de 15% sur tous les articles");
    }
  }
  
  let dateUser = prompt("Entre ta date de naissance (format JJ/MM/AAAA) :");
  happyBirthday(dateUser);
  */

  function evenOrOdd(number) {
    if(number%2 == 0)
      {
        console.log("Even");
      }
    else if(number%2 == 1)
      {
        console.log("Odd");
      }
  }
  let number = parseInt(prompt("Veuillez choisir un nombre"));
  evenOrOdd(number)