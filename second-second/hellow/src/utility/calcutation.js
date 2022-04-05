const addtocart = id =>{
    let shopping = {};

// parse json to object 
const check = localStorage.getItem('add-to-cart');
if(check){
    shopping = JSON.parse(check);
} 
else{
    shopping = {};
}   

// quantity check important 
const quantity = shopping[id];
if(quantity){
    const newquantity = parseInt(quantity) + 1;
    shopping[id] = newquantity;
}
else{
    shopping[id] = 1;
}
    localStorage.setItem('add-to-cart', JSON.stringify(shopping));
}

const removedb = id =>{
   const check = localStorage.getItem('add-to-cart');
   if(check){
       const haveit = JSON.parse(check);
       if(id in haveit){
           delete haveit[id];
           localStorage.setItem('add-to-cart', JSON.stringify(haveit));

       }
   }
}
export {addtocart,removedb};