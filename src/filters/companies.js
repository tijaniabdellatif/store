import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (products) => {

    let brands = ['all',...new Set(products.map((item) => {

        return item.category
  }))
]
   
const companies = getElement('.companies');
companies.innerHTML = brands.map((item) => {
     return `<button class="company-btn">${item}</button>`
}).join('');


 companies.addEventListener('click',function(e) {

         const element = e.target;

         if(element.classList.contains('company-btn')){

                let newStore = [];

                if(element.textContent === 'all'){

                      newStore = [...products];
                }

                else {

                        newStore = products.filter((item) => {

                              return item.category === e.target.textContent
                        })
                }

                display(newStore,getElement('.products-container'));
         }
 })



};

export default setupCompanies;
