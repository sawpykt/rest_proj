function Cart(localStorageKey) {
//function inside object = method. group data and funcs tgt into an obj
const cart = {
    cartItems: undefined,

    //this is a shortcut for loadFromStorage: function() {}
    loadFromStorage(){
        //to access cartItems
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

    if (!this.cartItems) {
        this.cartItems =[{

    //normalizing data
        productName: 
        'Pad Thai',
        quantity: 2,
    },{
        productName:
        'Stir-fried Basil with Rice',
        quantity: 1,
    }];
    
    }
},

saveToStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
},

addToCart(productName) {
    let matchingItem;

            //checks if a product name is already in the cart array
            this.cartItems.forEach((cartItem) => {
                if (productName === cartItem.productName) {
                    matchingItem = cartItem;
                    //if item exists, it gets saved inside matchingItem
                }
            });

            //matching item found becomes an obj which is a truthy val 
            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({
                productName: productName,
                quantity: 1
            });
        }

        // to access this func inside the obj above
        this.saveToStorage();
},

removeFromCart(productName) {
    const newCart = [];
    
    this.cartItems.forEach((cartItem) => {
     if (cartItem.productName !== productName) {
         newCart.push(cartItem);
     }
    });
    this.cartItems = newCart;
 
    this.saveToStorage();
 },

calculateCartQuantity() {
    let cartQuantity = 0;

    // loops thru each item in cart array
    this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

    return cartQuantity;
},

updateQuantity(productName, newQuantity) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
        if (productName === cartItem.productName) {
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;

    saveToStorage();
}
};

return cart; // return the cart obj to use outside function
}

//these 2 carts will load from diff keys in local storage
const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');




// u run cart.loadfromstorage from above then run the code inside that obj
cart.loadFromStorage();

/*
const businessCart = {
    cartItems: undefined,

    //this is a shortcut for loadFromStorage: function() {}
    loadFromStorage(){
        //to access cartItems
        this.cartItems = JSON.parse(localStorage.getItem('cart-business'));

    if (!this.cartItems) {
        this.cartItems =[{

    //normalizing data
        productName: 
        'Pad Thai',
        quantity: 2,
    },{
        productName:
        'Stir-fried Basil with Rice',
        quantity: 1,
    }];
    
    }
},

saveToStorage() {
    localStorage.setItem('cart-business', JSON.stringify(this.cartItems));
},

addToCart(productName) {
    let matchingItem;

            //checks if a product name is already in the cart array
            this.cartItems.forEach((cartItem) => {
                if (productName === cartItem.productName) {
                    matchingItem = cartItem;
                    //if item exists, it gets saved inside matchingItem
                }
            });

            //matching item found becomes an obj which is a truthy val 
            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({
                productName: productName,
                quantity: 1
            });
        }

        // to access this func inside the obj above
        this.saveToStorage();
},

removeFromCart(productName) {
    const newCart = [];
    
    this.cartItems.forEach((cartItem) => {
     if (cartItem.productName !== productName) {
         newCart.push(cartItem);
     }
    });
    this.cartItems = newCart;
 
    this.saveToStorage();
 },

calculateCartQuantity() {
    let cartQuantity = 0;

    // loops thru each item in cart array
    this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

    return cartQuantity;
},

updateQuantity(productName, newQuantity) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
        if (productName === cartItem.productName) {
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;

    saveToStorage();
}
};
*/


// u run cart.loadfromstorage from above then run the code inside that obj
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);









