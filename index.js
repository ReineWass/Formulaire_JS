 function valider(){
 
 //récupération des données
 let noms = document.getElementById("nom");
 let ppnom = document.getElementById("pnom");
//  afficher la valeur de la variable noms
 ppnom.innerHTML = noms.value;

let email = document.getElementById("emails");
let waemail = document.getElementById("w_email");
// afficher la valeur de la variable email 
waemail.innerHTML = email.value;

let satis = document.getElementById("sat");
let wasat = document.getElementById("w_sat");
// afficher la valeur de la variable satis
wasat.innerHTML = satis.value;

let coachs = document.getElementById("coach");
let wacoach = document.getElementById("w_coach");
// afficher la valeur de la variable coach
wacoach.innerHTML = coachs.value;

let experiences = document.getElementById("experience");
let waexperience = document.getElementById("w_experience");
// afficher la valeur de la variable experiences
waexperience.innerHTML = experiences.value;
} 