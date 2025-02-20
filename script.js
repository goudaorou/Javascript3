let inscription = document.getElementById("inscription");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let dateNaissance = document.getElementById("date_naissance");
let numeroTelephone = document.getElementById("telephone");
let motivation = document.getElementById("motivation");
let resultat = document.getElementById("resultat")


inscription.addEventListener("submit", function(e){
    
    //champ du nom

    if (nom.value.trim()==="") {
        alert("Le champ  'nom'est obligatoire");
        e.preventDefault();
        return;
    
    }
    // champ prenom
    if (prenom.value.trim()==="") {
        alert("le champ 'prenom' est obligatoire");
        e.preventDefault();
        return;
        
    }
    //date de naissance
    if (dateNaissance.value.trim()=== "") {
        alert("Le champ 'date de naissance est obligatoire");
        e.preventDefault();
        return;
        
    }
    //telephone
    if (numeroTelephone.value.trim()==="") {
        alert(" Le numéro de téléphone est obligatoire");
        e.preventDefault();
        return;
        
    }
    //motivation
    if (motivation.value.trim()==="") {
        alert("ce champ 'motivation' est obligatoire");
        e.preventDefault();
        return;
        
    }
    //verification de l'âge 
     let dateBorn = new Date(dateNaissance.value); 
     let aujourdHui = new Date(); 

let age = aujourdHui.getFullYear() - dateBorn.getFullYear();
let mois = aujourdHui.getMonth() - dateBorn.getMonth();
let jours = aujourdHui.getDate() - dateBorn.getDate();

// Ajustement de l'âge si l'anniversaire n'est pas encore passé cette année
if (mois < 0 || (mois === 0 && jours < 0)) {
    age--;
}

if (age < 18) {
    alert("Vous devez avoir au moins 18 ans avant de vous inscrire !");
    e.preventDefault(); // Empêche l'envoi du formulaire
    return;
}
 // Vérification de la motivation (entre 1000 et 2500 caractères)
 if (motivation.value.trim().length < 1000 || motivation.value.trim().length > 2500) {
    alert("Votre motivation doit contenir entre 1000 et 2500 caractères !");
    
    return;
}
// Vérification du format du numéro de téléphone (doit commencer par 01 et contenir 10 chiffres)
    let regexTel = /^01\d{8}$/;
    if (!regexTel.test(numeroTelephone.value.trim())) {
        alert("Le numéro de téléphone doit commencer par '01' et contenir 10 chiffres !");
        e.preventDefault();
        return;
}

         // Si tout est valide, afficher les informations
         document.getElementById("esNom").textContent = `Nom : ${nom.value}` 
         document.getElementById("esPrenom").textContent =  `Prénom : ${prenom.value}`;
         document.getElementById("esDate").textContent =  `Date de naissance : ${dateNaissance.value}`;
         document.getElementById("esTelephone").textContent = `Téléphone : ${telephone.value}`;
         document.getElementById("esMotivation").textContent = `Motivation : ${motivation.value}`;

         resultat.classList.remove("hidden"); // Afficher la section des résultats
         

         alert("Inscription réussie !");

        

    

    
})
