import {formatCurrency} from '../scripts/ultility/money.js'

//to check formatCurrency function works as it should
if (formatCurrency(2095) === '20.95' ) {
    console.log('passed');
} else {
    console.log('failed');
}