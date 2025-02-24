//Fonction clique MENU


function show() 
{
  document.querySelector('.menu').classList.toggle('active');
}


// Ajoute l'écouteur d'événements pour le bouton
document.querySelector('.menubtn').addEventListener('click', show);



//________________________________________________________________________________


document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('theme-btn');
    const icSoleil = document.getElementById('icsoleil');
    const icLune = document.getElementById('iclune');
    const body = document.body;

    // Si aucun thème n'est enregistré, on définit le mode sombre par défaut
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }

    // Appliquer le thème enregistré (ici dark)
    const savedTheme = localStorage.getItem('theme');
    body.classList.toggle('dark-theme', savedTheme === 'dark');
    icSoleil.style.display = savedTheme === 'dark' ? 'inline' : 'none';
    icLune.style.display = savedTheme === 'dark' ? 'none' : 'inline';

    // Basculer entre les modes Dark et Light
    themeBtn.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        icSoleil.style.display = isDarkMode ? 'inline' : 'none';
        icLune.style.display = isDarkMode ? 'none' : 'inline';
    });
});


//___________________________________________________________________________________________________

/*Fonction Commentaire */


  // Sélection des éléments nécessaires
  const leftArrow = document.querySelector('.fleche.gauche'); // Flèche gauche
  const rightArrow = document.querySelector('.fleche:not(.gauche)'); // Flèche droite
  const profileName = document.querySelector('.pp p'); // Nom de la personne
  const comment = document.querySelector('.com'); // Commentaire

  // Tableau des commentaires
  const commentaires = [
    { name: "Cristophe Gamel", comment: "Top qualité et réactivité, cerne bien les besoins et produit un résultat très bon!" },
    { name: "Sophie Durand", comment: "Service exceptionnel, je recommande !" },
    { name: "Jean Dupont", comment: "Une équipe très professionnelle, merci !" }
  ];

  // Index actuel pour suivre le commentaire affiché
  let currentIndex = 0;

  // Fonction pour mettre à jour le contenu
  function updateComment() {
    profileName.textContent = commentaires[currentIndex].name; // Met à jour le nom
    comment.textContent = commentaires[currentIndex].comment; // Met à jour le commentaire
  }

  // Initialiser le premier commentaire
  updateComment();

  // Gestionnaire pour la flèche gauche
  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--; // Reculer dans le tableau
      updateComment(); // Mettre à jour le contenu
    }
  });

  // Gestionnaire pour la flèche droite
  rightArrow.addEventListener('click', () => {
    if (currentIndex < commentaires.length - 1) {
      currentIndex++; // Avancer dans le tableau
      updateComment(); // Mettre à jour le contenu
    }
  });

