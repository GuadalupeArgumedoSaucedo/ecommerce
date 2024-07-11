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
