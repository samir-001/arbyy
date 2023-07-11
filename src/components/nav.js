import { useState } from "react"
import { Link } from 'react-router-dom';

const Nav = ()=>{
const [isOpen, Navtoggler] =  useState(false) 


    return(
        <div className='nav'>
            <div className="container">
                <div className="navContent">
                <Link to="/admin">
                    <div className='logo'>
                    
                        admin 
                    </div>
                </Link>
                <Link to="/demo">
                    <div className='logo'>
                    
                        demo 
                    </div>
                </Link>
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