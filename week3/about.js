console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  alert("Form has been Submitted!");
}

function rubberDuckCompliment() {
  alert("Quack, Quack, you are swag!");
}

let form = document.querySelector("#contact");
let rubberDuck = document.querySelector("#rubber-duck");

form.addEventListener("submit", handleSubmit);
rubberDuck.addEventListener("mouseover", rubberDuckCompliment);
