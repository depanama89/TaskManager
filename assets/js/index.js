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

closeForm.addEventListener("click", function (e) {
  mainSectionModal.style.display = "none";
});
// verificatio de l'existance de localstorage
function getFromLocalstorage(key, defaultValue = []) {
  if (JSON.parse(localStorage.getItem(key)) == null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
}

// submit button
newCreateTask.addEventListener("click", function () {
  mainSectionModal.style.display = "flex";
});
acceuil.addEventListener("click", function () {
  console.log("test");
});

// function add
function addTask(
  titleTache,
  categories,
  userValue,
  priorities,
  desciptions,
  newDate
) {
  let storageTask = getFromLocalstorage("tasks");
  storageTask.push({
    titleTache,
    categories,
    userValue,
    priorities,
    desciptions,
    newDate,
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
      value
    );
    titleTache.value = "";
    categories.value = "";
    priorities.value = "";
    descriptions.value = "";
  } catch (error) {
    alert("veuillez remplir tout les champs");
  }
});
