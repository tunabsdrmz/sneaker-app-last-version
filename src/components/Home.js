import React, { useEffect } from "react";
import Images from "./Images";
import SmallImg from "./SmallImg";

function Home(){
    const [image , setImage] = React.useState(Images)
    const [currimage, setCurrImage] = React.useState(0)
    const [count,setCount] = React.useState(1)
    const [pricing, setPricing] = React.useState(125)
    const[activeImg,setActiveImg] = React.useState(0)
    const[lightBox , setLightBox] = React.useState(false)
    const[cart , setCart] = React.useState(false)
    function increment (){
        setCount(prevCount => prevCount + 1)
        setPricing(pricing + 125)      
    }  

    function decrement (){
        if(count > 1){
           setCount(prevCount => prevCount - 1) 
           setPricing(pricing - 125) 
        }else{
            setCount(1)
        }       
    }
    const smallimages = image.map(img =>(
       <SmallImg
        on={activeImg}
        key={img.alt}
        id={img.id}
        src={img.smlImg}
        alt={img.alt}
        handleCurrImgChange={handleCurrImgChange}
       /> 
    ))
    function handleCurrImgChange(id){
        setCurrImage(prevcurrimage => prevcurrimage = id)
        setActiveImg(prevactiveImg => prevactiveImg = id)
    }
    function handleLightBox(){
        setLightBox(prevlightbox => !prevlightbox)
    }
    function handleAddCart(){
        setCart(!cart)
    }
    function nextIcon(){
        if(currimage <3){
        setCurrImage(prevcurrimage => prevcurrimage+1)
        setActiveImg(prevactiveImg => prevactiveImg+1)
        }else{
            setCurrImage(0)
            setActiveImg(0)
        }
    }
    function prevIcon(){
        if(currimage >0){
        setCurrImage(prevcurrimage => prevcurrimage-1)
        setActiveImg(prevactiveImg => prevactiveImg-1)
        }else{
            setCurrImage(3)
            setActiveImg(3)
        }
    }
    
    /*<img className="sml-img"   alt={image[0].alt}  src={image[0].smlImg}/>
    <div className="small-images">
            <img className="sml-img"   alt={image[1].alt} src={image[1].smlImg}/>
            </div>
            <div className="small-images">
            <img className="sml-img"   alt={image[2].alt}  src={image[2].smlImg}/>
            </div>
            <div className="small-images">
            <img className="sml-img"  alt={image[3].alt}  src={image[3].smlImg}/>
            </div>*/
return(
    <div className="container-home">
        {cart && <p onClick={handleAddCart} className="alert">Added!</p>}
        <div className="images-main-div">
            <div className="big-image" onClick={handleLightBox}>
               <img className="big-img" alt={image[currimage].alt} src={image[currimage]?.bigImg}/>
                </div>
                <div className="togglearrows">
                <svg onClick={prevIcon} className="next-mob" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#ff7d1a" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                <svg onClick={nextIcon} className="prev-mob" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#ff7d1a" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
            <div className="small-image-cont">  
                <div className="small-images" >
                     {smallimages}
                </div>
            </div>
        </div>
        {
            lightBox && <div className="lightbox">
                <div className="lightbox-big-image">
                <svg className="lightbox-close-icon" onClick={handleLightBox} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fillRule="evenodd"/></svg>
                    <svg onClick={prevIcon} className="lightbox-prev-icon" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#ff7d1a" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                <img className="lightbox-big-img" alt={image[currimage].alt} src={image[currimage]?.bigImg}/>
                <svg onClick={nextIcon} className="lightbox-next-icon" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#ff7d1a" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
                <div className="lightbox-small-image-cont">
                <div className="lightbox-small-images" >
                     {smallimages}
                </div>
            </div>
            </div>
        }
        <div className="description-main-div">
            <p id="subtitle">SNEAKER COMPANY</p>
            <h2 id="title">Fall Limited Edition Sneakers</h2>
            <p id="paragraph">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="pricing-mobile">
            <div className="price-div">
            <p id="price">${pricing}.00</p>
            <p id="discount">50%</p>
            </div>
            <div>
            <p id="prev-price">$250.00</p>
            </div>
            </div>
            <div className="pricing-section">
                <div className="inc-dec-div">
                    <div className="img-but" onClick={decrement}>
                        <img src="./image/icon-minus.svg" alt="minus" />
                    </div>
                    <p className="number">{count}</p>
                    <div className="img-but" onClick={increment}>
                    <img src="./image/icon-plus.svg" alt="plus"/>
                    </div>
                </div>
                <div className="add-cart-button" onClick={handleAddCart}>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fillRule="nonzero"/></svg>
                <p id="add-to-cart">Add to cart</p>
                </div>
            </div>

        </div>
    </div>
)
}
export default Home;