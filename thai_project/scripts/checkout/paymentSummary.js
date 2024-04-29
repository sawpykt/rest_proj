import { cart } from "../../data/cart.js";
//imported from products.js where priceCents
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../ultility/money.js";

export function renderPaymentSummary() {

  //CALCULATE TOTAL
    let productPriceCents = 0; /*for when cart is empty */
    
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productName);
        productPriceCents += product.priceCents * cartItem.quantity
    });

    const totalCents = productPriceCents;

    // item() in payment section
    let calculateCartQuantity = 0;
    cart.forEach((cartItem) => {
      calculateCartQuantity += cartItem.quantity;
    });
    
let paymentSummaryHTML = `          
    <div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div class=".js-cart-quantity">Items (${calculateCartQuantity}):</div>
    <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>
  `;

  document.querySelector('.js-payment-summary')
  .innerHTML = paymentSummaryHTML;
};