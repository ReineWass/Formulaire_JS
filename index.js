 function valider(){
 
 //récupération des données
 let noms = document.getElementById("nom");
 let ppnom = document.getElementById("pnom");
 ppnom.innerHTML = noms.value;

let email = document.getElementById("emails");
let waemail = document.getElementById("w_email");
waemail.innerHTML = email.value;

let satis = document.getElementById("sat");
let wasat = document.getElementById("w_sat");
wasat.innerHTML = satis.value;

let coachs = document.getElementById("coach");
let wacoach = document.getElementById("w_coach");
wacoach.innerHTML = coachs.value;

let experiences = document.getElementById("experience");
let waexperience = document.getElementById("w_experience");
waexperience.innerHTML = experiences.value;
} 



