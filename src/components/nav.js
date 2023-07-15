import { useState } from "react"
import { useSelector ,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from "../reducers/auth/auth";
const Nav = ()=>{
const [isOpen, Navtoggler] =  useState(false) 

const dispatch = useDispatch()
    return(
        <div className='nav'>
            <div className="container">
                <div className="navContent">
         
                <Link to="/home">
                    <div className='logo'>
                    
                    مركز بحوث 
                    </div>
                </Link>

                {/* <div className='logo' onClick={()=>{
                    sessionStorage.removeItem("token")
                        dispatch(logout())
                }}>logout </div> */}
                <div style={{display:"flex",color:"white",alignItems:"center"}}>
                    <Link to="/admin"> admin </Link>
                <div style={{marginLeft:"20px"}} className='link-button' onClick={()=>{
                    Navtoggler((open)=>{
                        return !open
                    })
                    
                }}></div>
                </div>
                </div>
        </div>
        <div className={"links " +( isOpen ? "open":'')}>
            <div className="inner-links">
                <div className="link" >ِشبكة بحوث وتقارير ومعلومات</div>
                <div className="link" >اخبار مجلس الامة الكويتي</div>
                <div className="link" >سفارات وقنصليات وبعثات دبلوماسية</div>
                <div className="link"  > غسيل سجاد الكويت</div>
                <div className="link" > عقارات المملكة</div>
                <div className="link" >دليل وسيارات للبيع بالسعودية</div>
                <div className="link" > دليل وعقارات قطر</div>
                <div className="link" >دليل وعقارات الإمارات</div>
                <div className="link"  >دليل وعقارات البحرين</div>
                <div className="link" >دليل وعقارات الكويت </div>
                <div className="link" > 4uuo usa guide</div>
            </div>
        </div>
      </div>
      
    )
}

export default Nav