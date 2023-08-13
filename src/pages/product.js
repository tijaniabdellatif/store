// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';



// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
// const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads

window.addEventListener('DOMContentLoaded', async () => {

    const id = window.location.search;
    const urlID = id.substring(4);
    try {

        const response = await fetch(`${singleProductUrl}/${urlID}`);
        if(response.status >= 200 && response.status <= 299){

              const product = await response.json();

              /**
               * Grab data
               */

              console.log(product);

              const {id,title,price,rating,description,brand,images:img} = product;
              productID = id;
              const image = img[0];

              /**
               * Set values
               */

              document.title = `${title.toUpperCase()} | Store`;
              pageTitleDOM.innerHTML = `Home / ${title.toUpperCase()}`
              imgDOM.src = image;
              titleDOM.innerHTML = title;
              companyDOM.innerHTML = `By ${brand}`;
              priceDOM.innerHTML = `${formatPrice(price)}`;
              descDOM.textContent = description;

              const starts = document.querySelectorAll('.stars i');
              console.log(starts);

              
        }
        else {

           
            centerDOM.innerHTML = `
                <div class="error">
                <h3>
                  Sorry, Something went wrong
                </h3>

                <a href="index.html" class="btn">Back</a>
                </div>
            `;

            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
              })
        }

    }catch(error){

        console.log(error);
    }
   
  
    loading.style.display = 'none';

});

cartBtn.addEventListener('click', function(){

     addToCart(productID);
})