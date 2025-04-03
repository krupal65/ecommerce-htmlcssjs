export const homeQuantityToggle=(event,id,stock)=>
{
   const currelement= document.querySelector(`#card${id}`);//id select hogi vho direct card hi hogi means jis card pe click kiya vho card ajega
   //console.log(currelement);
   const productQuantity=currelement.querySelector('.productquantity');//product quinty sirf ayegi
   //console.log(productQuantity);

let quantity=parseInt(productQuantity.getAttribute('data-quantity'))|| 1;//data quantity ko get kar raha hai or usko parse kar raha hai or usko integer me convert kar raha hai or agr data quantity me koi value nahi hai toh 1 set kar raha hai

if(event.target.className === "increment")
   if(quantity<stock)
   {
      quantity+=1;
   }
   else if(quantity === stock)
   { 
      quantity=stock;
   }
   if((event.target.className === "decrement") && quantity>1)
   {
      quantity-=1;
   }
   
    productQuantity.setAttribute('data-quantity',quantity.toString());//data quantity ko set kar raha hai 
   productQuantity.innerText=quantity;//product quantity me set kar raha hai
}