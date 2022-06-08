import React from "react";
function SmallImg({id,src,alt,handleCurrImgChange,on}){
    return <img
     className= {on === id ? "active-img": "sml-img"}
     alt={alt}  
     src={src}
     onClick={()=> handleCurrImgChange(id)}
     />
}
export default SmallImg;