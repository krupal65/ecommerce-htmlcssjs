import { getcartproductfromLS } from "./getcartproductfromLS.js";
import { updatecartvalue } from "./updatecartvalue.js";
getcartproductfromLS();
export const  addtocartwork =(event,id,stock)=>
{
  
let arrLocalStorageproduct=getcartproductfromLS();

    const currcartelement= document.querySelector(`#card${id}`);//is se pata cahlega use r ne kon si product me add kara he
   
    let productQuantity=currcartelement.querySelector('.productquantity').innerText;
    let pricecart= currcartelement.querySelector('.originalprice').innerText;
    console.log(productQuantity,pricecart);

    pricecart=pricecart.replace("$","");
   

    let existingProd=arrLocalStorageproduct.find(
        (curprod)=> curprod.id===id
      
    );
    if(existingProd){
        return false;
    }
    pricecart=pricecart*productQuantity;
    productQuantity=Number(productQuantity);
    pricecart=Number(pricecart);


    arrLocalStorageproduct.push({id,productQuantity,pricecart});
    localStorage.setItem("cartProductLs",JSON.stringify(arrLocalStorageproduct));
    updatecartvalue(arrLocalStorageproduct);
}

