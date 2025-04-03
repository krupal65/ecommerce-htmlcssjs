
const cartvalue=document.querySelector("#cartvalue");
export const updatecartvalue=(cartProducts)=>
{
    return (cartvalue.innerHTML=`<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`);
}