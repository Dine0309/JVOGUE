let cartCount = 0;
let cartTotal = 0;

// Cart functionality
$('.add-cart-btn').click(function () {
  const box = $(this).closest('.box');
  const price = parseFloat(box.data('price'));
  const quantity = parseInt(box.find('.quantity-input').val()) || 1;

  // Calculate total for this item
  const totalPrice = price * quantity;
  cartCount += quantity;
  cartTotal += totalPrice;

  // Update cart count display
  $('#cart-count').text(cartCount);
  alert(`Added ${quantity} item(s) for a total of $${totalPrice.toFixed(2)} to the cart!`);
});