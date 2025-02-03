//Fonction clique MENU


function show() 
{
  document.querySelector('.menu').classList.toggle('active');
}


// Ajoute l'écouteur d'événements pour le bouton
document.querySelector('.menubtn').addEventListener('click', show);



//________________________________________________________________________________


/*Fonction DARK & LGHT*/

document.addEventListener('DOMContentLoaded', function () {
	const themeBtn = document.getElementById('theme-btn');
	const icSoleil = document.getElementById('icsoleil');
	const icLune = document.getElementById('iclune');
	const body = document.body; // Cible <body> pour appliquer le thème globalement
	const menuBtn = document.querySelector('.menubtn'); // Bouton du menu
	const menu = document.querySelector('.menu'); // Menu mobile
  
	// Vérifier si un thème est déjà enregistré dans le localStorage
	const savedTheme = localStorage.getItem('theme');
  
	// Si un thème est enregistré, l'appliquer
	if (savedTheme === 'light') {
	  body.classList.add('light-theme');  // Appliquer le mode clair sur le body
	  icSoleil.style.display = 'none';
	  icLune.style.display = 'inline';
	} else {
	  body.classList.remove('light-theme');  // Appliquer le mode sombre sur le body
	  icSoleil.style.display = 'inline';
	  icLune.style.display = 'none';
	}
  
	// Basculer entre les modes Dark et Light
	themeBtn.addEventListener('click', () => {
	  const isLightMode = body.classList.toggle('light-theme');  // Basculer entre les modes
  
	  // Appliquer les icônes et stocker l'état du thème
	  if (isLightMode) {
		icSoleil.style.display = 'none';
		icLune.style.display = 'inline';
		localStorage.setItem('theme', 'light');  // Enregistrer le mode clair
	  } else {
		icSoleil.style.display = 'inline';
		icLune.style.display = 'none';
		localStorage.setItem('theme', 'dark');  // Enregistrer le mode sombre
	  }
	});
  
	// Fonction du menu mobile
	menuBtn.addEventListener('click', () => {
	  menu.classList.toggle('active'); // Basculer l'état actif du menu
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

