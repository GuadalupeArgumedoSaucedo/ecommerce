// Function to add item to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItem = cart.find(item => item.name === product.name);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update the cart button
function updateCartButton(button, product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItem = cart.find(item => item.name === product.name);

    if (cartItem) {
        button.innerHTML = `<button class="btn btn-decrease">-</button> ${cartItem.quantity} <button class="btn btn-increase">+</button>`;
        button.classList.remove('btn-warning');
        button.classList.add('btn-cart');
        button.querySelector('.btn-decrease').addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            updateCartQuantity(product, -1, button);
        });
        button.querySelector('.btn-increase').addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            updateCartQuantity(product, 1, button);
        });
    } else {
        button.innerHTML = 'Add to Cart';
        button.classList.add('btn-warning');
        button.classList.remove('btn-cart');
    }
}

// Function to update cart quantity
function updateCartQuantity(product, change, button) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItem = cart.find(item => item.name === product.name);

    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.name !== product.name);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartButton(button, product);
}

// Add event listeners to the "Add to Cart" buttons
function addCartEventListeners() {
    document.querySelectorAll('.btn-warning').forEach((button) => {
        const card = button.closest('.card');
        const product = {
            name: card.querySelector('.cardcontent').textContent.trim(),
            price: card.querySelector('.price').textContent.trim().replace('$', ''),
            image: card.querySelector('.card__image').src,
            quantity: 1
        };

        updateCartButton(button, product); // Update button based on current cart state

        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            addToCart(product);
            updateCartButton(button, product);
        });
    });
}

// Initialize event listeners
addCartEventListeners();

