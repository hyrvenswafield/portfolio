// FORMULAIRE
function verifierFormulaire() {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs !");
        return false;
    }

    alert("Message envoyé avec succès !");
    return false;
}

// CALCULATEUR DE PRÊT
function calculerPret() {
    let P = Number(document.getElementById("montant").value);
    let taux = Number(document.getElementById("taux").value);
    let duree = Number(document.getElementById("duree").value);

    if (P <= 0 || taux <= 0 || duree <= 0) {
        alert("Veuillez entrer des valeurs valides");
        return;
    }

    let r = taux / 100 / 12;
    let n = duree * 12;

    let M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    document.getElementById("resultatPret").textContent =
        "Paiement mensuel : " + M.toFixed(2);
}

// HORLOGE EN TEMPS RÉEL
function afficherHeure() {
    let maintenant = new Date();
    let h = String(maintenant.getHours()).padStart(2, "0");
    let m = String(maintenant.getMinutes()).padStart(2, "0");
    let s = String(maintenant.getSeconds()).padStart(2, "0");

    document.getElementById("heure").value = h + ":" + m + ":" + s;

    setTimeout(afficherHeure, 1000);
}
afficherHeure();

// MANIPULATION DE TABLEAUX
let tableau = [];

function afficherTableau() {
    document.getElementById("affichageTableau").textContent =
        "Tableau : " + tableau.join(", ");
}

function ajouterNombre() {
    let valeur = document.getElementById("nombreUtilisateur").value;

    if (valeur === "") {
        alert("Veuillez entrer un nombre");
        return;
    }

    tableau.push(Number(valeur));
    document.getElementById("nombreUtilisateur").value = "";
    afficherTableau();
}




function trierTableau() {
    if (tableau.length === 0) {
        alert("Le tableau est vide");
        return;
    }

    tableau.sort((a, b) => a - b);
    afficherTableau();
}



















function afficherProjet(id) {
    // Cacher tous les projets
    let projets = document.getElementsByClassName("projet-detail");
    for (let i = 0; i < projets.length; i++) {
        projets[i].style.display = "none";
    }

    // Afficher le projet sélectionné
    let section = document.getElementById(id);
    section.style.display = "block";

    // Scroll vers le projet
    section.scrollIntoView({ behavior: "smooth" });
}
