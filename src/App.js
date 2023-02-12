import { BodyComponent1 } from "./bodyComponent1";
import Component2 from "./bodyComponent2";
import Footer from "./footer";
import Headers from "./header";
import { ShopList } from "./learning";  
import  LogIn  from "./LogIn";

export default function Apps(){
    return(
       
        <>
        
        <Headers/>
        <BodyComponent1/>
        <ShopList/>
        <Component2/>
        <Footer/>
        
        </>
    )

}
