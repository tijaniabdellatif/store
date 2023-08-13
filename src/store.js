import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store') || [];
console.log('my store',store);
const setupStore = ({products}) => {
  store = products.map((product) => {
   
      const {
        id,brand,price,images:img,category,
        rating,thumbnail,title
    
    } = product;

    const image  = img[0];
    
    return {id,brand,price,image,price,category,title,rating,thumbnail,title}
  });
  setStorageItem('store', store);
};



const findProduct = (id) => {

    let product = store.find((product) => product.id === parseInt(id));
    return product;
};

export { store, setupStore, findProduct };
