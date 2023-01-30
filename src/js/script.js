$(document).ready(function(){
  $('.slider__block').slick( {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    /* variableWidth: true,
    adaptiveHeight: true */
  } );
});

window.addEventListener('scroll', function() {
  if (window.scrollY >= 93) {
    document.getElementById('logo_active').classList.add('show');
  } else {
    document.getElementById('logo_active').classList.remove('show');
  }
});
window.addEventListener('scroll', function() {
  if (window.scrollY >= 93) {
    document.getElementById('blur-header').classList.add('active');
  } else {
    document.getElementById('blur-header').classList.remove('active');
  }
});




// Step 1: Create a variable to store the quantity in the cart
let cartQuantity = 0;

// Step 2: Find the HTML element that will display the cart quantity
let cartQuantityElement = document.getElementById("cart-quantity");
let cartIconElement = document.getElementById("cart-icon");
// Step 3: Assign a click event to the "add to cart" button
let addToCartButton = document.getElementById("add-to-cart-button");
addToCartButton.addEventListener("click", function() {
  // Increment the cart quantity variable by 1
  cartQuantity++;

  // Step 4: Update the displayed cart quantity
  cartQuantityElement.innerHTML = cartQuantity;

  // Step 5: Save the cart quantity to local storage
  localStorage.setItem("cartQuantity", cartQuantity);
});
let deleteFromCartButton = document.getElementById("delete-from-cart-button");
deleteFromCartButton.addEventListener("click", function() {
  if (cartQuantity > 0) {
    cartQuantity--;    
    // Step 4: Update the displayed cart quantity
    cartQuantityElement.innerHTML = cartQuantity;
  
    // Step 5: Save the cart quantity to local storage
    localStorage.setItem("cartQuantity", cartQuantity);
  }
  if (cartQuantity > 0) {
    cartQuantityElement.classList.add("visible"),
    cartIconElement.classList.add("visible");
  } else {
    cartQuantityElement.classList.remove("visible"),
    cartIconElement.classList.remove("visible");
  }
});

// Step 6: Set the cart quantity from local storage when the page loads
let storedCartQuantity = localStorage.getItem("cartQuantity");
if (storedCartQuantity) {
  cartQuantity = parseInt(storedCartQuantity);
  cartQuantityElement.innerHTML = cartQuantity;
} 

