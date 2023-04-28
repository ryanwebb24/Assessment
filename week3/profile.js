let favColorBtn = document.getElementById("color");
let favplaceBtn = document.getElementById("place");
let favritualBtn = document.getElementById("ritual");

function favItem(event) {
  switch (event.target.innerHTML) {
    case "My Favorite Color":
      alert("My favorite color is red!");
      break;
    case "My Favorite Place":
      alert("My favorite place is japan");
      break;
    case "My Favorite Ritual":
      alert("My favorite ritual is eating food");
      break;
    default:
      alert("not a viable button");
  }
}

favColorBtn.addEventListener("click", favItem);
favplaceBtn.addEventListener("click", favItem);
favritualBtn.addEventListener("click", favItem);
