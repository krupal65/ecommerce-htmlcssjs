import { addtocartwork } from "./addtocartwork";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productcontainer=document.querySelector('#productcontainer');
const producttemplate=document.querySelector('#producttemplate');
//homeprouctcard function is use for take data from  product.json from main.js and display it in home page
 export const homeproductcard = (products) => {
    if(!products) 
        {
            return false;        }
    
    products.forEach((currproduct)=>
    { //destructreing{}
        //console.log(currproduct);
        const {id,name,category,brand,image,price,stock,description}=currproduct;
      //  console.log(id);
      //  console.log(name);
      const productclone=document.importNode(producttemplate.content,true);//sare node isme ajayegen producttemplte ke andar jo bhi div he vho
//measns use is sab node select kar skate he ek sath
 productclone.querySelector('.productname').textContent=name;//textContent is same as innerhtml
 productclone.querySelector('.ProductImage').src=image;
 productclone.querySelector('.ProductImage').alt=name;
 productclone.querySelector('.productdes').textContent=description;
 productclone.querySelector('.originalprice').textContent=`$${price}`;
 productclone.querySelector('.wrongprice').textContent=`$${price*4}`;
 productclone.querySelector('.category').textContent=category;
 productclone.querySelector('.productstock').textContent=stock;



 productclone.querySelector("#cardvalueunique").setAttribute('id',`card${id}`);//clss same hoga lekin id ab 

 productclone.querySelector('.btn-plus').addEventListener('click',(event)=>{
homeQuantityToggle(event,id,stock)
     
 })
    productclone.querySelector('.addtocart').addEventListener('click',(event)=>{
        addtocartwork(event,id,stock)
       
    })
        

    productcontainer.append(productclone);
    }
    );
}