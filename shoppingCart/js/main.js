const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let cartItemsValues = [0, 0, 0];

//
// PROBEREN OM COOKIES TOE TE VOEGEN VOOR DIE CART
//

for(let i  = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
            case "rolex":
                cartItemsValues[0] += 1;
                break;
            case "audermars piguet":
                cartItemsValues[1] += 1;
                break;
            case "richard mille":
                cartItemsValues[2] += 1;
                break;
        }
        if(modalIsOpen === false){
            shoppingModal.style.display = "flex";
            modalIsOpen = true;
            setTimeout(function(){
                shoppingModal.style.display = "none";
                modalIsOpen = false;
            },2000);
        }
       
    }
}
 
const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
let checkoutIsOpen = false;

let cartItems = document.getElementsByClassName("checkout__listItem");
let cartItems_value = document.getElementsByClassName("checkout__amount");
 
checkoutButton.onclick = function(){
    if(checkoutIsOpen === false){
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutIsOpen = true;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItemsValues[i] < 1) {
                cartItems[i].style.display = "none";
            }
            else {
                cartItems_value[i].innerHTML = cartItemsValues[i] + "x";
                cartItems[i].style.display = "flex";
            }
        }
        return;
    }
        document.querySelector("main").style.display = "block";
        checkoutWindow.style.display = "none";
        checkoutIsOpen = false;
   
}