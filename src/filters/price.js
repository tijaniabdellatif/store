import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {

    const priceInput = getElement('.price-filter');
    const priceValue = getElement('.price-value');


    let maxPrice = store.map((product) => product.price);
    maxPrice = Math.max(...maxPrice) * 10;
    maxPrice = Math.ceil(maxPrice);
    
    priceInput.value = maxPrice
    priceInput.max = maxPrice
    priceInput.min = 0;
    priceValue.textContent = `Price : ${maxPrice} MAD`


    priceInput.addEventListener('input',function(){

        const value = parseInt(priceInput.value);
        priceValue.textContent = `Price : ${value} MAD`;

        let newStore = store.filter((product) => product.price * 10 <= value)
        display(newStore,getElement('.products-container'));
        if(newStore.length < 1){

             const products = getElement('.products-container');

             products.innerHTML = `
             <h3 class="filter-error">Sorry,no products matched your search</h3>
             `;
        }
    })

   




};

export default setupPrice;
