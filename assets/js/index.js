// selection d'element
const closeForm = document.getElementById("close");
const mainSectionModal = document.getElementById("main__section__modal");
const titleTache = document.getElementById("titleTache");
const categories = document.getElementById("categories");
const userValue = document.getElementById("userValue");
const priorities = document.getElementById("priorities");
const descriptions = document.getElementById("descriptions");
const createTask = document.getElementById("createTask");
const addNewTask = document.getElementById("addNewTask");
const hiddenForm = document.getElementById("hidden");
const acceuil = document.getElementById("acceuil");
const newCreateTask = document.getElementById("newCreateTask");
const addNewcategory = document.getElementById("addNewcategory");
const categorieModal = document.getElementById("modalCategory");
const listeTaches = document.getElementById("listTaches");
const taskNewbtn = document.getElementById("taskNewbtn");
const aVenir = document.getElementById("aVenirID");
const eRetardID = document.getElementById("eRetardID");
const terminerID = document.getElementById("terminerID");
const listMenu = document.querySelectorAll(
  ".main__section__widgets__head__lists-list"
);
console.log(listMenu);

let statusv = 0;
closeForm.addEventListener("click", function (e) {
  mainSectionModal.style.display = "none";
});
// verification de l'existance de localstorage
function getFromLocalstorage(key, defaultValue = []) {
  if (JSON.parse(localStorage.getItem(key)) == null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
}

// recherche tâche

// aVenir.addEventListener("click", function () {
//   const value = aVenir.dataset.v;
//   rechercheTache(value);
// });

// function rechercheTache(value) {
//   const search = getFromLocalstorage("tasks");
//   let findItems = [];
//   findItems = search.find((tache) => tache.statusv == value);
//   displayTasks(findItems);
// }

function displayTasks(value) {
  const search = getFromLocalstorage("tasks");
  search.forEach((item, value) => {
    item.statusv == value;
    const li = document.createElement("li");
    li.classList.add = "main__section__widgets__taches__lists-item";
    li.setAttribute("class", "main__section__widgets__taches__lists-item");
    li.textContent = `${item.titleTache}`;
    li.innerHTML =
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>` +
      li.innerHTML;
    listeTaches.appendChild(li);
  });
}

aVenir.addEventListener("click", function () {
  const value = aVenir.dataset.v;
  displayTasks(value);
});
//   const li = document.createElement("li");
//   li.classList.add = "main__section__widgets__taches__lists-item";
//   li.setAttribute("class", "main__section__widgets__taches__lists-item");
//   // li.textContent = result.titleTache;
//   li.innerHTML =
//     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>` +
//     li.innerHTML;
//   listeTaches.appendChild(li);
//   // result.forEach((item) => {
//   //   const li = document.createElement("li");
//   //   li.classList.add = "main__section__widgets__taches__lists-item";
//   //   li.setAttribute("class", "main__section__widgets__taches__lists-item");
//   //   li.textContent = item.titleTache;
//   //   li.innerHTML =
//   //     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>` +
//   //     li.innerHTML;
//   //   listeTaches.appendChild(li);
//   // });
// }

// shows tache

// function showsTask() {
//   const showstask = getFromLocalstorage("tasks");

//   showstask.forEach((item) => {
//     const li = document.createElement("li");
//     li.classList.add = "main__section__widgets__taches__lists-item";
//     li.setAttribute("class", "main__section__widgets__taches__lists-item");
//     li.textContent = item.titleTache;
//     li.innerHTML =
//       `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>` +
//       li.innerHTML;
//     listeTaches.appendChild(li);
//   });

//   // console.log(showstask);
// }
// showsTask();
// submit button
newCreateTask.addEventListener("click", function () {
  mainSectionModal.style.display = "flex";
});

//affichage le modal du formulaire
taskNewbtn.addEventListener("click", function () {
  mainSectionModal.style.display = "flex";
});
acceuil.addEventListener("click", function () {
  console.log("test");
});

addNewcategory.addEventListener("click", () => {
  document.getElementById("modalCategory").style.display = "block";
});

window.addEventListener("click", (e) => {
  if (e.target == categorieModal) {
    categorieModal.style.display = "none";
  }
});

// function add
function addTask(
  titleTache,
  categories,
  userValue,
  priorities,
  desciptions,
  newDate,
  statusv
) {
  let storageTask = getFromLocalstorage("tasks");
  storageTask.push({
    titleTache,
    categories,
    userValue,
    priorities,
    desciptions,
    newDate,
    statusv,
  });
  localStorage.setItem("tasks", JSON.stringify(storageTask));
}

//function add category
const addCategorie = () => {
  let storageCategories = getFromLocalstorage("categories");
};

// bouton submit
addNewTask.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const newDate = new Date();
    const value = newDate.toDateString();
    console.log(value);

    addTask(
      titleTache.value,
      categories.value,
      userValue.textContent,
      priorities.value,
      descriptions.value,
      value,
      statusv
    );
    titleTache.value = "";
    categories.value = "";
    priorities.value = "";
    descriptions.value = "";
  } catch (error) {
    alert("veuillez remplir tout les champs");
  }
});
