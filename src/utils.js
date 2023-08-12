

const allProductsUrl = 'https://dummyjson.com/products'

const singleProductUrl =
  'https://dummyjson.com/products'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check your  "${selection}" selector, no such element exist in the dom or 
  you made an invalid selection
  `)
}

const formatPrice = (price) => {

  let formatedPrice = new Intl.NumberFormat('ma-MA',{

     style :'currency',
     currency:'MAD',
    
  }).format((price * 10).toFixed(2))

  return formatedPrice;

}
const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
