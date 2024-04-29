import {formatCurrency} from '../../scripts/ultility/money.js';

//describe('string') creates a test suite
describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    }); //to name the test. checks whetehr 2095 is equals to 20.95

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00')
    });

    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});

//unlike manual testing where u have to create an if else statement and displaying the results urself to test, jasmine has a function expect(); to do that, to compare a value to another
//reads like eng
// if a test fails, jasmine tells u which file nd line it failed at
