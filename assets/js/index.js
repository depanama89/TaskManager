const closeForm = document.getElementById("close");
const mainSectionModal = document.getElementById("main__section__modal");
const hiddenForm = document.getElementById("hidden");

closeForm.addEventListener("click", function (e) {
  mainSectionModal.style.display = "none";
});
