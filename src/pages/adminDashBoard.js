import { Navigate, useLocation } from "react-router-dom"
import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
const AdminDashboard  = ()=>{
    const location = useLocation()
    const login = useSelector((state)=>state.Auth.login)

    if(sessionStorage.getItem("token") == null){
        return <Navigate to="/login"></Navigate>
    }
    return(
        <div className="dashBoard">
            <div className="dashBoard__nav-bar">
                <div style={{width:"200px",height:"200px",backgroundImage:'url("./../../magnify.png")',backgroundSize:"cover",}}>

                </div>
                <Link to="" >

                <div className="dashBoard__nav-bar__link">الرئسية</div>
                </Link>
                <Link to="articles" >

                <div className="dashBoard__nav-bar__link">المقالات</div>
                </Link>
                <Link to="users" state={{title:"المستخدمين"}}>
                <div className="dashBoard__nav-bar__link">المستخدمين</div>
                </Link>
                <Link to="messages" state={{title:"الرسائل"}}>
                <div className="dashBoard__nav-bar__link">الرسائل</div>
                </Link>
                <Link to="comments" state={{title:"التعليقات"}}>
                <div className="dashBoard__nav-bar__link">التعليقات</div>
                </Link>
                <Link to="tags" state={{title:"الاوسمة"}}>
                <div className="dashBoard__nav-bar__link">الاوسمة</div>
                </Link>
            </div>
            <div className="dashBoard__content">

                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default AdminDashboard