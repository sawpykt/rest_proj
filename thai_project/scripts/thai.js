import { addToCart, calculateCartQuantity } from "../data/cart.js";
import { products } from '../data/products.js';
import { formatCurrency } from "./ultility/money.js";

/* GENERATE HTML ON MAIN PAGE */
function generateProductHTML(product) {

    /* MEAT OPTION ONLY FOR PT & PFR */
    let meatOptionHTML = '';
    if (product.name === "Pad Thai" || product.name === "Pineapple Fried Rice") {
        meatOptionHTML = `
                <select>
                    <option selected value="Chicken">Chicken</option> 
                    <option value="Shrimp">Shrimp</option>
                    <option value="Seafood">Seafood</option>
                </select>
        `;
    }

    return `
        <div class="product-container">

            <div class="product-image-container">
                <img class="product-image" src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-price">
                $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class= 'js-meatOptionCS'> 
                ${meatOptionHTML} 
            </div>
            
            <div class="product-spacer"></div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-name="${product.name}">
                Add to Cart
            </button>

        </div>
    `;
}

/* CATEGORY FILTER PAGE */
function updateProductsGrid(category) {
    let filteredProducts = products.filter(product => product.category === category);
    if (category === "All") {
        filteredProducts = products;
    }

    console.log(filteredProducts);

    let productsHTML = '';
    filteredProducts.forEach(product => {
        productsHTML += generateProductHTML(product);
    });
    document.querySelector('.js-products-grid').innerHTML = productsHTML;

    //add event listeners back to the product containers in each anchor link
    addToCartEventListeners();
}

// ALL ITEMS ON HOME
updateProductsGrid("All");

// NAVBAR
document.querySelectorAll('.navbar-scrollable a').forEach(link => {
    link.addEventListener('click', function(event) {
        /*bcuz the anchor tag doesnt ref to an actual link, need to preventdefault of going to a link page nd instead update page again*/
        event.preventDefault();
        const category = this.getAttribute('href').substring(1); /* get category from href and remove #(index 0) in front*/
        updateProductsGrid(category); /* update products grid based on category from href*/
    });
});

// CART AMT
function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

updateCartQuantity();

// ALL ADDTOCART BUTTONS
function addToCartEventListeners() {
    document.querySelectorAll('.js-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.productName;
            const quantitySelect = this.parentElement.querySelector('.product-quantity-container select');
            const quantity = parseInt(quantitySelect.value);
            for (let i = 0; i < quantity; i++) {
                addToCart(productName);
            }
            let selectedMeatCS = '';
            const meatSelectCS = this.parentElement.querySelector('.js-meatOptionCS select');
            if (meatSelectCS) {
                selectedMeatCS = meatSelectCS.value + " " + productName
            } else {
                selectedMeatCS = productName; /* remains empty so the addtocart still works for items w/o meat option */
            }

            //console.log(selectedMeatCS);

            updateCartQuantity();
        });
    });
}
