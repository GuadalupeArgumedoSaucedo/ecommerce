document.addEventListener("DOMContentLoaded", function() {
    // Cart update functionality
    const quantityFields = document.querySelectorAll('.quantity-field');
    const subtotalElement = document.querySelector('.final-subtotal');
    const taxElement = document.querySelector('.tax');
    const shippingElement = document.querySelector('.shipping');
    const totalElement = document.querySelector('.total');

    const TAX_RATE = 0.08; // 8% tax rate
    const SHIPPING_COST = 5.00;

    function updateCart() {
        let subtotal = 0;

        // Update subtotal for each item
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity-field').value);
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            const itemSubtotal = quantity * price;
            item.querySelector('.subtotal').textContent = `$${itemSubtotal.toFixed(2)}`;
            subtotal += itemSubtotal;
        });

        // Update summary totals
        const tax = subtotal * TAX_RATE;
        const total = subtotal + tax + SHIPPING_COST;

        subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
        taxElement.textContent = `Taxes (8%): $${tax.toFixed(2)}`;
        shippingElement.textContent = `Shipping: $${SHIPPING_COST.toFixed(2)}`;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Event listeners for quantity changes
    quantityFields.forEach(field => {
        field.addEventListener('input', updateCart); // Use 'input' event to capture immediate changes
    });

    // Initial update when the page loads
    updateCart();

    // Shipping address toggle functionality
    const checkbox = document.getElementById('differentShipping');
    const shippingInfo = document.getElementById('shippingInfo');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            shippingInfo.style.display = 'block';
        } else {
            shippingInfo.style.display = 'none';
        }
    });
});

// cart.js

// Function to display cart items
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="item-details">
                <h4>${item.name}</h4>
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}" class="product-frame">
                </div>
                <div class="price">$${item.price}</div>
                <div class="quantity">
                    <input type="number" value="${item.quantity}" min="1" class="quantity-field" data-index="${index}">
                </div>
                <div class="subtotal">$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="remove">
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    calculateTotal();
}

// Function to calculate total price
function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let tax = subtotal * 0.08;
    let shipping = 5.00;
    let total = subtotal + tax + shipping;

    document.querySelector('.final-subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.querySelector('.tax').textContent = `Taxes (8%): $${tax.toFixed(2)}`;
    document.querySelector('.shipping').textContent = `Shipping: $${shipping.toFixed(2)}`;
    document.querySelector('.total').textContent = `Total: $${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

// Function to update item quantity
function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

// Event listeners for remove buttons and quantity fields
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const index = event.target.getAttribute('data-index');
        removeFromCart(index);
    }
});

document.addEventListener('input', (event) => {
    if (event.target.classList.contains('quantity-field')) {
        const index = event.target.getAttribute('data-index');
        const quantity = parseInt(event.target.value);
        updateQuantity(index, quantity);
    }
});

// Display cart items on page load
displayCartItems();
