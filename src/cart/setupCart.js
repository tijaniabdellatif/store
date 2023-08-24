// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items


const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');


export const addToCart = (id) => {

    let item = cart.find((ele) => ele.id === parseInt(id));
   
    if(!item){

        let product = findProduct(id);
        product = {...product,amount:1};
        cart = [...cart,product];
        addToCartDOM(product);

        console.log(cart);


    }

    else {

        const amount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')] ;
        const newAmount = items.find((value) => value.dataset.id == id)
        newAmount.textContent = amount;
    }

      
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart',cart);
    openCart();
      
};


function displayCartItemCount(){

   const amount = cart.reduce((total,item) => {

            return (total += item.amount)
   },0);

    cartItemCountDOM.textContent = amount;
}

function displayCartTotal(){

     let total = cart.reduce((acc,item) => {

        return (acc += item.price * item.amount)

     },0)

    cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;

}
function displayCartItemsDOM(){

    cart.forEach(item => {
        addToCartDOM(item);
    })
}

function increaseAmount(id){

      let newAmount;
        cart = cart.map((item) => {
              if(item.id === parseInt(id)){
                newAmount = item.amount + 1
                    item = {...item,amount:newAmount}
              }

              return item;
        })

        return newAmount;
  }

  function decreaseAmount(id){

    let newAmount;
      cart = cart.map((item) => {
            if(item.id === parseInt(id)){
              newAmount = item.amount - 1
                  item = {...item,amount:newAmount}
            }

            return item;
      })

      return newAmount;
}


  function removeItem(id){

    cart = cart.filter((item) => {
         return item.id !== parseInt(id);
    })
  }

function setupCartProcess(){

     cartItemsDOM.addEventListener('click',(e) => {

         const element = e.target;
         const parent = e.target.parentElement;
         const id = e.target.dataset.id;
         const parentID = e.target.parentElement.dataset.id;

           //remove 
             if(element.classList.contains('cart-item-remove-btn')){

                 removeItem(id);
                 element.parentElement.parentElement.remove();
             }
           //increase 
           if(parent.classList.contains('cart-item-increase-btn')){
               const newAmount = increaseAmount(parentID);
               parent.nextElementSibling.textContent = newAmount;   
           }
           //decrease

           if(parent.classList.contains('cart-item-decrease-btn')){

            const newAmount = decreaseAmount(parentID);
            if(newAmount === 0){
              removeItem(id);
              parent.parentElement.parentElement.remove();
            }
            else {

                 parent.previousElementSibling.textContent = newAmount;
            }

           }



          displayCartItemCount();
          displayCartTotal();
          setStorageItem('cart',cart);

     })

}
const init = () => {

     displayCartItemCount();
     displayCartTotal();
     displayCartItemsDOM();
     /**Initialize the dom with the cart */

     setupCartProcess()

}

init();
