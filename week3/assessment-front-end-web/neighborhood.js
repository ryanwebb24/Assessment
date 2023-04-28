let randBtn = document.getElementById("rand-restaurant")

function randRestaurant(){
    let restaurants = ["Wendys","Taco Bell","LoLo's Hawaiian BBQ","Rancheritos","Burger Bar","Chinese Buffet"]
    let randChoice = restaurants[Math.floor(Math.random() * restaurants.length)]
    alert(`I would recommend eating at ${randChoice}. They have great food!`)
}


randBtn.addEventListener('click', randRestaurant)