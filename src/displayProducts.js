import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (featured,element) => {

    /**
     * Display products
     */
    element.innerHTML = featured.map((prod) => {

           const {id,title,price,image,thumbnail} = prod;

           return `
           <article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="" />
           
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${title}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article>
           ` 
    }).join('');



     element.addEventListener('click',function(e) {

            const parent = e.target.parentElement;
            
            if(parent.classList.contains('product-cart-btn')){
                 addToCart(parent.dataset.id);
            }
            
     })
     
};

export default display;
