export let cart;

loadFromStorage();

export function loadFromStorage () {cart = JSON.parse(localStorage.getItem('cart'));

// DEFAULT CART
if (!cart) {
    cart =[]; 
}};

// SAVE CART AFT REFRESH
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productName) {
    let matchingItem;

            //checks if a product name is already in the cart array
            cart.forEach((cartItem) => {
                if (productName === cartItem.productName) {
                    matchingItem = cartItem;
                    //if item exists, it gets saved inside matchingItem
                }
            });

            //matching item found becomes an obj w a truthy val 
            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                cart.push({
                productName: productName,
                quantity: 1
            });
        }

        saveToStorage();
}

export function removeFromCart(productName) {
   const newCart = []; /* store  updated cart in this array */
   
   cart.forEach((cartItem) => {
    if (cartItem.productName !== productName) {
        newCart.push(cartItem); /* push(add) back the non-removed items into cart */
    }
   });
   cart = newCart; /* updates cart var */

   saveToStorage();
}

export function updateQuantity(productName, newQuantity) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productName === cartItem.productName) {
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;

    saveToStorage();
}

export function calculateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

    return cartQuantity; /* update var >0 */
}

