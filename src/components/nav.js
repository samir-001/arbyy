import { useState } from "react"

const Nav = ()=>{
const [isOpen, Navtoggler] =  useState(false) 


    return(
        <div className='nav'>
            <div className="container">
                <div className="navContent">

                <div className='logo'>
                
                    شبكة بحوث وتقارير ومعلومات 
                </div>
                <div className='link-button' onClick={()=>{
                    Navtoggler((open)=>{
                        return !open
                    })
                    
                }}></div>
                </div>
        </div>
        <div className={"links " +( isOpen ? "open":'')}></div>
      </div>
      
    )
}

export default Nav