import { loadFromStorage } from '../../data/cart.js';
import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';


//renderOrderSummary creates the ordersummary part of the page

describe('test suite: renderOrderSummary', () => {
    it('displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary"></div>`; // takes this html and puts it inside test container

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{ productName: 
                'images/Real-Thai/pad thai.jpeg',
                quantity: 2,
            },{
                productName:
                'images/Real-Thai/Stir fried basil w rice.jpeg',
                quantity: 1,
            }]);
                
        });
        loadFromStorage();
        });

    // test if the page works
    it('removes a product', () => {
        document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary"></div>`; // takes this html and puts it inside test container

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{ productName: 
                'images/Real-Thai/pad thai.jpeg',
                quantity: 2,
            },{
                productName:
                'images/Real-Thai/Stir fried basil w rice.jpeg',
                quantity: 1,
            }]);
                
        });
        loadFromStorage();

        renderOrderSummary();

        document.querySelector(`.js-delete-link-$`)
    })
})