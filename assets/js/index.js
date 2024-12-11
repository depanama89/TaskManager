// selection d'element
const closeForm = document.getElementById("close");
const mainSectionModal = document.getElementById("main__section__modal");
const titleTache = document.getElementById("titleTache");
const categories = document.getElementById("categories");
const userValue = document.getElementById("userValue");
const priorities = document.getElementById("priorities");
let statusv = document.getElementById("status");
const descriptions = document.getElementById("descriptions");
const createTask = document.getElementById("createTask");
const addNewTask = document.getElementById("addNewTask");
const hiddenForm = document.getElementById("hidden");
const acceuil = document.getElementById("acceuil");
const newCreateTask = document.getElementById("newCreateTask");
const addNewcategory = document.getElementById("addNewcategory");
const categorieModal = document.getElementById("modalCategory");
const listeTaches = document.getElementById("listTaches");
const listeTachesN = document.getElementById("listeTachesN");
const taskNewbtn = document.getElementById("taskNewbtn");
const aVenir = document.getElementById("aVenirID");
const eRetardID = document.getElementById("eRetardID");
const terminerID = document.getElementById("terminerID");
const listMenu = document.querySelectorAll(
  ".main__section__widgets__head__lists-list"
);
const modalMenuLists = document.getElementById("modal__menu__lists_filter");
const contenuMenuLists = document.getElementById("contenuMenuLists");
const checkTaskFiltre = document.querySelector(
  ".contenu__menu__lists__filter__filtre__rapide-lists"
);
const newTacheRowRef = document.querySelector("#tacheRowRef");
const tbody = document.getElementById("tbody");
// console.log({ checkTaskFiltre });

statusv = 0;
let html = "";
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

function rechercheTache(value) {
  const tasks = getFromLocalstorage("tasks");

  const findItems = tasks.filter((tache) => tache.statusv == value);

  displayTasks(findItems);
}

// fonction pour afficher les taches pages index

function displayTasks(value) {
  const items = value.length ? [...value] : "aucune taches";
  listeTaches.innerHTML = "";
  items.forEach((item) => {
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

// affichage du button de creation de la tâche

function gererBtnAdd(tabName) {
  const taskNewbtn = document.getElementById("taskNewbtn");
  if (tabName == "tab2") {
    taskNewbtn.style.display = "none";
  } else if (tabName == "tab3") {
    taskNewbtn.style.display = "none";
  } else {
    taskNewbtn.style.display = "flex";
  }
}

function openTab(event, tabName, id) {
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  const tabButton = document.querySelectorAll(".tab-btn");
  tabButton.forEach((button) => {
    button.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  gererBtnAdd(tabName);

  switch (id) {
    case 0:
      // console.log({ id });
      rechercheTache(id);

      break;
    case 1:
      // console.log({ id });

      rechercheTache(id);

      break;
    case 2:
      rechercheTache(id);

      break;
    default:
      break;
  }
}

// les ecouteurs de l'application
checkTaskFiltre.addEventListener("click", checkTask);

// modal filtre

contenuMenuLists.addEventListener("click", function () {
  modalMenuLists.style.display = "block";
});

// window.addEventListener("click", (e) => {
//   console.log("test");
//   if (e.target == modalMenuLists) {
//     modalMenuLists.style.display = "none";
//   }
// });
window.onclick = function (e) {
  if (e.target == modalMenuLists) {
    modalMenuLists.style.display = "none";
  }
};

// loading page

document.addEventListener("DOMContentLoaded", function () {
  rechercheTache(0);
  filterTask([0, 1, 2]);
});

newCreateTask.addEventListener("click", function () {
  mainSectionModal.style.display = "flex";
});

//affichage le modal du formulaire
try {
  taskNewbtn.addEventListener("click", function () {
    mainSectionModal.style.display = "flex";
  });
  acceuil.addEventListener("click", function () {
    console.log("test");
  });
} catch (error) {}

addNewcategory.addEventListener("click", () => {
  document.getElementById("modalCategory").style.display = "block";
});

window.addEventListener("click", (e) => {
  if (e.target == categorieModal) {
    categorieModal.style.display = "none";
  }
});

//function de filtrage de taches non termine

function filterTask(statusp) {
  const localStorageTasks = getFromLocalstorage("tasks");
  const filterItems = localStorageTasks.filter((item) => {
    const status = Number(item.statusv);
    return statusp.includes(status);
  });

  console.log({ filterItems });
  // listeTachesN.innerHTML = "";
  html.innerHTML = "";
  filterItems.forEach((item) => {
    let values = "";
    if (item.statusv == 0) {
      values = "A venir";
    } else if (item.statusv == 1) {
      values = "En retard";
    } else {
      values = "Terminer";
    }
    html += `<tr>`;
    html += `<td  class="celltd">${item.titleTache}</td>`;
    html += `<td class="celltd">${item.newDate}</td>`;
    html += `<td class="celltd">${item.userValue}</td>`;
    html += `<td class="celltd">${item.priorities}</td>`;
    html += `<td class="celltd">${values}</td>`;
    html += `</tr>`;
    // let data = [
    //   item.titleTache,
    //   item.newDate,
    //   item.userValue,
    //   item.priorities,
    //   item.statusv,
    // ];
    // console.log({ data });
    // const newTacheRow = newTacheRowRef.cloneNode(true);
    // newTacheRow.removeAttribute("style");
    // newTacheRow.removeAttribute("id");
    // const fields = newTacheRow.querySelector(".data-cell");
    // fields.forEach((field, idx) => {
    //   field.innerHTML = data[idx];
    // });
    tbody.innerHTML = html;
  });
}

function checkTask(e) {
  if (e.target.tagName == "LI") {
    const clickedElement = e.target;
    if (clickedElement.classList.contains("checked")) {
      clickedElement.classList.remove("checked");
      clickedElement.firstElementChild.parentNode.removeChild(
        clickedElement.firstElementChild
      );
    } else {
      clickedElement.classList.add("checked");
      const svgIcon = `<span><svg viewBox="0 0 24 24" width="24" height="24" fill="#1a73e8"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg></span>`;
      clickedElement.insertAdjacentHTML("afterbegin", svgIcon);
    }

    const dataset = clickedElement.dataset.id;
    // switch (dataset) {
    //   case dataset == 10:
    //     const statusp = [0, 1];
    //     filterTask(statusp);
    //     break;
    //   case 2:
    //     const statuspx = 2;
    //     filterTask(statusp);
    //     break;
    //   default:
    //     break;
    // }
    if (dataset == 10) {
      const statusp = [0, 1];
      filterTask(statusp);
    } else {
      const statusp = [2];
      filterTask(statusp);
    }
  }
}

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
    const dateValue = newDate.toDateString();
    // console.log(value);

    addTask(
      titleTache.value,
      categories.value,
      userValue.textContent,
      priorities.value,
      descriptions.value,
      dateValue,
      statusv.value
    );
    titleTache.value = "";
    categories.value = "";
    priorities.value = "";
    descriptions.value = "";
    statusv.value = "";
  } catch (error) {
    alert("veuillez remplir tout les champs");
  }
});
