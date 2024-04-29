import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

// addToCart doesnt retun a val so u cant compare so cannot use toExpect()
describe('test suite: addToCart', () => {

    it('adds an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
               //{ productName: 'Sprite',
               // quantity: 1}// cant do this cuz u commented out the default cart
            ]); //to return an empty cart converted to string
        }); // jasmine can do mock versions
    });

    //this test assumes cart starts at 0 but bcuz of localStorage();, cart
    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'setItem'); // so test code wont get saved to localStorage

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]); 
        });
        loadFromStorage(); //mock localStorage.getitem to return empty array, then reload cart and the cart in the actual cart.js wont be affected

        addToCart('Sprite');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); 
        //expect(cart[0].Quantity).toEqual(1); cant do this bcuz default cart has no items cuz u commented them
    });
});

// jasmine can do mock versions using spyOn('obj uw to mock', 'string of the method uw to mock');. so ure just replacing this obj