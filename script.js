let category = ["Pizza", "Burger", "Pasta", "Salad", "Dessert"]
let categorylist = document.getElementById("category-list")

category.forEach(item => {
    categorylist.innerHTML +=
    `<li>${item}</li>`
})

let menu = [
     {
        name: "cheese pizza",
        details: "alot of cheese and a crispy crust",
        price: 450,
        image: "images/Image20260826155109.jpg",
     },
     {
        name: "burger",
        details: "juicy beef patty with fresh lettuce and tomato",
        price: 250,
        image: "images/Image20260826155109.jpg",
     },
     {
        name: "pasta",
        details: "creamy Alfredo sauce with tender pasta",
        price: 300,
        image: "images/Image20260826155109.jpg",
     },
]
let cardscon = document.getElementById("cards-con")
menu.forEach(function(item,i){
    cardscon.innerHTML +=
    `<div class="food-card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>${item.details}</p>
        <b class="price">${item.price}EGP😁</b>
        <button onclick="addtocart(${i})">Add to Cart</button>
    </div>`
})

let cart = []
let cartbox = document.getElementById("cart")
function addtocart(i){
    const found = cart.find(item => item.name === menu[i].name)
    if(found){
        found.qty = found.qty +1
    }else{
        cart.push({
            name:menu[i].name,
            price:menu[i].price,
            qty:1,
            img:menu[i].image
        })
        console.log(cart)
        showcart()
    }
}
function showcart(){
    cartbox.innerHTML = ""
    cart.forEach(function (element,i) {
        cartbox.innerHTML +=
        `<div class="item">
            <img src="${element.image}" width="50px">
            <h3>${element.name}</h3>
            <p>${element.qty}EGP</p>
            <p>${element.price}EGP</p>
        </div>`

    });
}