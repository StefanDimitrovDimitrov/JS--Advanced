function solve() {
   const output = document.querySelector('textarea'); // select by tag the field

   const cart = [];

   document.querySelector('.shopping-cart').addEventListener('click',add)
   
   function add(ev){

      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product'){
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({title,price});

         return output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      }
   }


   document.querySelector('.checkout').addEventListener('click',resultt)
      function resultt(){
         let result = cart.reduce((acc, c) =>{
            acc.items.push(c.title);
            acc.total +=c.price;
            return acc;
         }, {items: [], total:0});
      

      

         let unique = [...new Set(result.items)]

      output.value += `You bought ${unique.join(', ')} for ${result.total.toFixed(2)}.`


      document.querySelector('.shopping-cart').removeEventListener('click',add)
      document.querySelector('.checkout').removeEventListener('click',resultt)
      }
}