
const taskForm = document.getElementById('tast-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Ajouter une tâche à la liste
taskForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Empêcher le rechargement de la page

  const taskText = taskInput.value.trim(); // Récupérer la valeur de l'input

  if (taskText === '') {
    alert('Veuillez entrer une tâche.'); // Alerte si l'input est vide
    return;
  }

  // Créer un élément <li>
  const li = document.createElement('li');
  li.textContent = taskText;

  // Ajouter un bouton de suppression
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  deleteButton.addEventListener('click', function () {
    li.remove(); // Supprimer la tâche
  });

  // Ajouter le bouton à l'élément <li>
  li.appendChild(deleteButton);

  // Ajouter l'élément <li> à la liste
  taskList.appendChild(li);

  // Réinitialiser le champ d'entrée
  taskInput.value = '';
});

// script.js

// Sélection du bouton de bascule
const toggleThemeButton = document.getElementById('toggle-theme');

// Gestionnaire pour basculer entre les thèmes
toggleThemeButton.addEventListener('click', function () {
  // Bascule la classe "dark" sur le body et le container
  document.body.classList.toggle('dark');
  document.querySelector('.container').classList.toggle('dark');

  // Bascule également les classes des éléments dynamiques
  const input = document.getElementById('task-input');
  const button = document.querySelector('button[type="submit"]');
  input.classList.toggle('dark');
  button.classList.toggle('dark');

  // Bascule les styles des tâches déjà ajoutées
  document.querySelectorAll('li').forEach((li) => li.classList.toggle('dark'));

  // Mise à jour du texte du bouton

  
  // toggleThemeButton.textContent =
  //   document.body.classList.contains('dark') ? 'Mode Clair' : 'Mode Sombre';

  const icon = toggleThemeButton.querySelector('i'); // Sélectionner l'icône
  if (document.body.classList.contains('dark')) {
    icon.classList.remove('fa-sun'); // Retirer l'icône "soleil"
    icon.classList.add('fa-moon');   // Ajouter l'icône "lune"
  } else {
    icon.classList.remove('fa-moon'); // Retirer l'icône "lune"
    icon.classList.add('fa-sun');     // Ajouter l'icône "soleil"
  }
});
