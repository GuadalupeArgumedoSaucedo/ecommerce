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

        // Update the summary totals in the HTML
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
        <h5>${item.name}</h5>
        <div class="item-info">
            <div class="product-frame">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="price-info">
                <label for="price-${index}">Price:</label>
                <div id="price-${index}" class="price">$${item.price}</div>
            </div>
            <div class="quantity">
                <label for="quantity-${index}">Qty:</label>
                <input type="number" id="quantity-${index}" value="${item.quantity}" min="1" class="quantity-field" data-index="${index}">
            </div>
        </div>
        <div class="subtotal">$${(item.price * item.quantity).toFixed(2)}</div>
        <button class="remove-btn" data-index="${index}">Remove</button>
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

//alert for checkout
document.addEventListener('DOMContentLoaded', (event) => {
    const checkoutButton = document.getElementById('checkoutButton');
    const requiredFields = ['billing-fname', 'billing-email', 'billing-adr', 'billing-city', 'billing-state', 'billing-zip', 'cname', 'ccnum', 'expmonth', 'expyear', 'cvv'];
    const cartItemsContainer = document.querySelector('.cart-items');

    checkoutButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Validate required fields
        let allFieldsFilled = true;
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            console.log(`Checking field: ${fieldId}`);
            if (!field.value.trim()) {
                allFieldsFilled = false;
                field.style.borderColor = 'red'; // Highlight the empty field
                console.log(`Field ${fieldId} is empty`);
            } else {
                field.style.borderColor = ''; // Reset the border color if field is filled
                console.log(`Field ${fieldId} is filled`);
            }
        });

        if (allFieldsFilled) {
            // Display alert
            alert('Your items are on their way!');

            // Clear cart items
            cartItemsContainer.innerHTML = '';
            document.querySelector('.final-subtotal').textContent = 'Subtotal: $0.00';
            document.querySelector('.tax').textContent = 'Taxes (8%): $0.00';
            document.querySelector('.shipping').textContent = 'Shipping: $5.00';
            document.querySelector('.total').textContent = 'Total: $5.00';
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
