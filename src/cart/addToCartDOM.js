import { formatPrice, getElement } from '../utils.js';
const cartItemDOM = getElement('.cart-items');

const addToCartDOM = (product) => {

    
    const article = document.createElement('article');
    article.setAttribute('class','cart-item');
    article.setAttribute('data-id',product.id);

    console.log(product);

    article.innerHTML = `
    
    
    <img
      src="${product.image}"
      class="cart-item-img"
      alt="${product.title}"
    />

    <div>
      <h4 class="cart-item-name">${product.title}</h4>
      <p class="cart-item-price">${formatPrice(product.price)}</p>
      <button class="cart-item-remove-btn" data-id="${product.id}">remove</button>
    </div>

    <div>
      <button class="cart-item-increase-btn" data-id="${product.id}">
        <i class="fas fa-chevron-up"></i>
      </button>
      <p class="cart-item-amount" data-id="${product.id}">${product.amount}</p>
      <button class="cart-item-decrease-btn" data-id="${product.id}">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
    `;
    cartItemDOM.appendChild(article);
 
};

export default addToCartDOM;
