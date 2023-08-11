import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store') || [];
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

console.log(store);

const findProduct = () => {};

export { store, setupStore, findProduct };
