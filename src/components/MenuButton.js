import React from "react";
function MenuButton({click}){
    const [menuButton , setMenuButton] = React.useState(window.innerWidth)
    React.useEffect(()=>{
        const showButton = () => setMenuButton(window.innerWidth)
        window.addEventListener('resize', showButton)
        return () =>{ 
            window.removeEventListener('resize', showButton)
        }
    },[])
    
        
        
    
    return(
        <div>
        {menuButton <= 950 && <img src={click ? "image/icon-close.svg":"image/icon-menu.svg"} className="hamburger-menu-icon" alt="menu-button"/>}
        </div>
    )
}
export default MenuButton;