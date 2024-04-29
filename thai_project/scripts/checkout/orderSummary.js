import { cart, removeFromCart, calculateCartQuantity, /*updateCartQuantity*/ } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { formatCurrency } from '../ultility/money.js';
import { renderPaymentSummary } from './paymentSummary.js';

//DISPLAY ITEMS IN CHECKOUT PAGE
export function renderOrderSummary() {

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productName = cartItem.productName;
    
    const matchingProduct = getProduct(productName);
    
    if (matchingProduct) {
    cartSummaryHTML +=`

            <div class="cart-item-container js-cart-item-container-${matchingProduct.name}">

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.name}">${cartItem.quantity}</span>
                  </span>

                  <!-- DOES NOT WORK YET
                  <span class="update-quantity-link link-primary js-update-link" data-product-name="${matchingProduct.name}">
                    Update
                  </span>
                  -->

                  <!-- to input updated qty-->
                  <input class="quantity-input js-quantity-input-${matchingProduct.name}">
                  <span class="save-quantity-link link-primary js-save-link" data-product-name="${matchingProduct.name}">Save</span>


                  <a style= "text-decoration: none;" href="#" onclick="window.location.reload(true);">
                    <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingProduct.name}" data-product-name="${matchingProduct.name}">
                      Delete 
                    </span>
                  </a>
                </div>
              </div>
          </div>
          
    `;
    }
    
});

//u generated the HTML and put it into js-order-summary
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
.forEach((link) => {
    link.addEventListener('click', () => {
        const productName = link.dataset.productName;
        removeFromCart(productName);

        const container = document.querySelector(
            `.js-cart-item-container-${productName}`
        );

        container.remove();

        renderPaymentSummary(); /*update the payment */

        updateCartQuantity();
    });
});

//UPDATE NO. ITEMS AT CHECKOUT TOP
function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();

  document.querySelector('.js-return-to-home-link')
  .innerHTML = `${cartQuantity} item(s)`;

}

updateCartQuantity();


//UPDATE AND SAVE DOESNT WORK YET
/*
document.querySelectorAll('.js-update-link')
.forEach((link) => {
  link.addEventListener('click', () => {
    const productName = link.dataset.productName;
    ;
    const container = document.querySelector(
      `.js-cart-item-container-${productName}`
    );
    
    container.classList.add('is-editing-quantity');
  });
});

document.querySelectorAll('.js-save-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productName = link.dataset.productName;
      const container = document.querySelector(
        `.js-cart-item-container-${productName}`
      );
      container.classList.remove('is-editing-quantity');
      const quantityInput = document.querySelector(
        `.js-quantity-input-${productName}`
      );
      const newQuantity = Number(quantityInput.value);
      updateCartQuantity(productName, newQuantity);

      const quantityLabel = document.querySelector(
        `.js-quantity-label-${productName}`
      );
      quantityLabel.innerHTML = newQuantity;

      updateCartQuantity();
    });
  });
*/
}

