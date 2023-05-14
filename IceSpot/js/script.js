let Navbar = document.querySelector('.navbar');


document.querySelector('#bars-btn').onclick = () =>{
    Navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
}

let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    SearchForm.classList.toggle('active');
    Navbar.classList.remove('active');
}


document.querySelector('#cart-btn').onclick = () =>{
    CartItem.classList.toggle('active');
    Navbar.classList.remove('active');
    SearchForm.classList.remove('active');
}
// Get the button element
const addToCartBtn = document.querySelector('.add-to-cart-btn');

// Add click event listener to the button
addToCartBtn.addEventListener('click', () => {
  // Get the product details
  const content = addToCartBtn.parentNode;
  const contentName = content.querySelector('h3').innerText;
  const contentPrice = content.querySelector('.price').innerText;

  // Create a new cart item element
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <span class="cart-item-name">${contentName}</span>
    <span class="cart-item-price">${contentPrice}</span>
  `;

  // Add the cart item to the cart
  const cartItems = document.querySelector('.cart-items');
  cartItems.appendChild(cartItem);
});
  <div class="cart">
        <h3>Cart</h3>
        <div class="cart-items"></div>
      </div>

function changeImage(img) {
  img.src = "images/kiwi.jpg";
}