// this is a class w a property. every obj generated will have this menthod
// FIND the missing ';' thats making the code wrong. then change file import name in checkout.js to this file
/*
class Cart {
    cartItems= undefined;
    localStorageKey= undefined;

    //this is a shortcut for loadFromStorage: function() {}
    loadFromStorage(){
        //to access cartItems
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

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
};
    }
    //methods
    saveToStorage() {
        this.localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    };
};

addToCart(productName) {
    let matchingItem;

            //checks if a product name is already in the cart array
            this.cartItems.forEach((cartItem) => {
                if (productName === cartItem.productName) {
                    matchingItem = cartItem;
                    //if item exists, it gets saved inside matchingItem
                };
            });

            //matching item found becomes an obj which is a truthy val 
            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({
                productName: productName,
                quantity: 1
            });
        };

        // to access this func inside the obj above
        this.saveToStorage();
};

removeFromCart(productName) {
    const newCart = [];
    
    this.cartItems.forEach((cartItem) => {
     if (cartItem.productName !== productName) {
         newCart.push(cartItem);
     };
    });
    this.cartItems = newCart;
 
    this.saveToStorage();
 };

 calculateCartQuantity() {
    let cartQuantity = 0;

    // loops thru each item in cart array
    this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

    return cartQuantity;
};

updateQuantity(productName, newQuantity) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
        if (productName === cartItem.productName) {
            matchingItem = cartItem;
        };
    });

    matchingItem.quantity = newQuantity;

    saveToStorage();
};



    
    //these 2 carts will load from diff keys in local storage
    const cart = new Cart();
    const businessCart = new Cart();
    
    cart.loadFromStorageKey= 'cart-oop';
    businessCart.localStorageKey= 'cart-business';
    
    
    
    
    // u run cart.loadfromstorage from above then run the code inside that obj
    cart.loadFromStorage();
    businessCart.loadFromStorage();
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
  
    
    console.log(cart);
    console.log(businessCart);
    
    
    
    
    
