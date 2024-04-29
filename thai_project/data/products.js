
export function getProduct(productName) {
    let matchingProduct;

    products.forEach((product) => {
        if (product.name === productName) {
            matchingProduct = product;
        }
    });
    return matchingProduct;
}

class Product {
    image;
    name;
    priceCents;
    category; 
    constructor(productDetails) {
        this.name = productDetails.name;
        this.image = productDetails.image;
        this.priceCents = productDetails.priceCents;
        this.category = productDetails.category;
    } //when u generate the product obj, comp will auto run the constructor so put ur setup code
}

/*
//extends is inheritance so u can get an item to inherit all the descriptions (name,image,price)
class AlaCarte extends Product{

}
const alacarte = newClothing({
    image: 'images/Real-Thai/pad thai.jpeg',
    name: 'Pad Thai',
    priceCents: 980
},);
console.log(alacarte);
*/



export const products = [
  {
      image: 'images/Thai/pad thai.jpeg',
      name: 'Pad Thai',
      priceCents: 980,
      category:'Ala-Carte' 
  }, {
      image: 'images/Thai/Stir fried basil w rice.jpeg',
      name: 'Stir-fried Basil with Rice',
      priceCents: 1000,
      category:'Ala-Carte'
  }, {
      image: 'images/Thai/thai chicken laksa khao soi.jpeg',
      name: 'Thai Laksa (Khao soi)',
      priceCents: 1050,
      category:'Ala-Carte'
  }, {
      image: 'images/Thai/thai southern fried chicken w rice.jpeg',
      name: 'Thai Southern Fried Chicken with Rice',
      priceCents: 950,
      category:'Ala-Carte'
  }, {
      image: 'images/Thai/pineapple fried rice.jpeg',
      name: 'Pineapple Fried Rice',
      priceCents: 1050,
      category:'Ala-Carte'
  }, {
      image: 'images/Thai/thai style fried rice w kailan.jpeg',
      name: 'Thai Style Fried Rice with Kailan',
      priceCents: 920,
      category:'Ala-Carte'
  }, {
      image: 'images/Thai/thai boat noodle.jpeg',
      name: 'Thai Boat Noodle',
      priceCents: 1100,
      category: 'Soups'
  }, {
      image: 'images/Thai/tom yum soup creamy.jpeg',
      name: 'Creamy Tom Yum Soup',
      priceCents: 980,
      category: 'Soups'
  }, {
      image: 'images/Thai/tom yum soup clear.jpeg',
      name: 'Clear Tom Yum Soup',
      priceCents: 980,
      category: 'Soups'
  }, {
      image: 'images/Thai/green curry.jpeg',
      name: 'Green Curry',
      priceCents: 980,
      category: 'Soups'
  }, {
      image: 'images/Thai/thai southern fried chicken.jpeg',
      name: 'Thai Southern Fried Chicken',
      priceCents: 800,
      category: 'Sharing'
  }, {
      image: 'images/Thai/thai fish cake.jpeg',
      name: 'Thai Fish Cake (6pcs)',
      priceCents: 850,
      category: 'Sharing'
  }, {
      image: 'images/Thai/vegetable spring rolls.jpeg',
      name: 'Vegetable Spring Rolls (5pcs)',
      priceCents: 680,
      category: 'Sharing'
  }, {
      image: 'images/Thai/deep fried tofu.jpeg',
      name: 'Deep-fried Tofu (5pcs)',
      priceCents: 580,
      category: 'Sharing'
  }, {
      image: 'images/Thai/stir fried kangkong.jpeg',
      name: 'Stir-fried Kangkong',
      priceCents: 780,
      category: 'Sharing'
  }, {
      image: 'images/Thai/stir fried kailan.jpeg',
      name: 'Stir-fried Kailan',
      priceCents: 1250,
      category: 'Sharing'
  }, {
      image: 'images/Thai/Thai Omelet.jpeg',
      name: 'Thai Omelet',
      priceCents: 800,
      category: 'Sharing'
  }, {
      image: 'images/Thai/stir-fried basil sharing.jpeg',
      name: 'Stir-fried Basil',
      priceCents: 1700,
      category: 'Sharing'
  }, {
      image: 'images/Thai/mango salad.jpeg',
      name: 'Mango Salad',
      priceCents: 700,
      category: 'Sharing'
  }, {
      image: 'images/Thai/papaya salad.jpeg',
      name: 'Papaya Salad',
      priceCents: 900,
      category: 'Sharing'
  }, {
      image: 'images/Thai/thainorthernset.jpeg',
      name: 'Thai Northern Set',
      priceCents: 2250,
      category: 'Sets'
  }, {
      image: 'images/Thai/thrice happy set.jpeg',
      name: 'Thrice Happy Set',
      priceCents: 4680,
      category: 'Sets'
  }, {
      image: 'images/Thai/two happy set.jpeg',
      name: 'Two Happy Set',
      priceCents: 4080,
      category: 'Sets'
  }, {
      image: 'images/Thai/signature family set.jpeg',
      name: 'Signature Family Set',
      priceCents: 7880,
      category: 'Sets'
  }, {
      image: 'images/Thai/setA.jpeg',
      name: 'Set A',
      priceCents: 1530,
      category: 'Sets'
  }, {
      image: 'images/Thai/setB.jpeg',
      name: 'Set B',
      priceCents: 1280,
      category: 'Sets'
  }, {
      image: 'images/Thai/setC.jpeg',
      name: 'Set C',
      priceCents: 1600,
      category: 'Sets'
  }, {
      image: 'images/Thai/setD.jpeg',
      name: 'Set D',
      priceCents: 1580,
      category: 'Sets'
  }, {
      image: 'images/Thai/stir fried tofu basil w rice set.jpeg',
      name: 'Stir Fried Tofu Basil with Rice set',
      priceCents: 2180,
      category: 'Vegetarian-Delight'
  }, {
      image: 'images/Thai/tofu fried rice set.jpeg',
      name: 'Tofu Fried Rice with Egg and Kailan Set',
      priceCents: 2050,
      category: 'Vegetarian-Delight'
  }, {
      image: 'images/Thai/mango sticky rice.jpeg',
      name: 'Mango Sticky Rice',
      priceCents: 750,
      category: 'Desserts'
  }, {
      image: 'images/Thai/red ruby.jpeg',
      name: 'Red Ruby',
      priceCents: 520,
      category: 'Desserts'
  }, {
      image: 'images/Thai/rice.jpeg',
      name: 'Jasime Rice (Add-on)',
      priceCents: 180,
      category: 'Add-on'
  }, {
      image: 'images/Thai/iced milk tea.jpeg',
      name: 'Iced Milk Tea',
      priceCents: 350,
      category: 'Drinks'
  }, {
      image: 'images/Thai/iced lemongrass.jpeg',
      name: 'Iced Lemongrass',
      priceCents: 250,
      category: 'Drinks'
  }, {
      image: 'images/Thai/iced calamansi.jpeg',
      name: 'Iced Calamansi',
      priceCents: 250,
      category: 'Drinks'
  }, {
      image: 'images/Thai/iced lemon tea.jpeg',
      name: 'Iced Lemon Tea',
      priceCents: 250,
      category: 'Drinks'
  }, {
      image: 'images/Thai/coke.webp',
      name: 'Coke',
      priceCents: 330,
      category: 'Drinks'
  }, {
      image: 'images/Thai/sprite.png',
      name: 'Sprite',
      priceCents: 330,
      category: 'Drinks'
  }
].map((productDetails) => {
    return new Product(productDetails);
});
//map loops thru an array and runs the function inside for each val ()

console.log(products);