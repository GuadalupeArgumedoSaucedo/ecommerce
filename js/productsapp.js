// productsapp.js

// Function to add item to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

// Add event listeners to the "Add to Cart" buttons
document.querySelectorAll('.btn-warning').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const card = button.closest('.card');
        const product = {
            name: card.querySelector('.cardcontent').textContent.trim().split(' - ')[0],
            price: card.querySelector('.cardcontent').textContent.trim().split(' - ')[1].replace('$', ''),
            image: card.querySelector('.card__image').src,
            quantity: 1
        };
        addToCart(product);
    });
});