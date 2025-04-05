//localstorage me se data get karne ke liye ye fun use
import { updatecartvalue } from "./updatecartvalue";

export const getcartproductfromLS=()=>{
    let cartProducts=localStorage.getItem("cartProductLs");//cartproductls vho data he ls me dal ne ke liye
    if(!cartProducts){
        return [];
    }else{
        cartProducts= JSON.parse(cartProducts);//json.parse karne se array me convert ho jata he


              updatecartvalue(cartProducts);//always pahele ase add to cart 0 nahi dikaheyga jo hoga vahi dikhayega
        return cartProducts;
    }
} 