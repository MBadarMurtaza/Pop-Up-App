let popUp = document.getElementById("pop");

function openPopUp() {
  popUp.classList.remove("hidden");
  setTimeout(() => {
    popUp.classList.add("top-[50%]", "scale-[1]");
  }, 10);
}

function closePopUp() {
  popUp.classList.remove("top-[50%]", "scale-[1]");
  setTimeout(() => {
    popUp.classList.add("hidden");
  }, 400);
}
