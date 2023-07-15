import { Formik ,Form} from "formik"
import {linkSchema} from "../schema/login"
import { useDispatch, useSelector } from "react-redux"
import InputGroup from "../components/inputGroup"
import {checkAuth } from "./../reducers/auth/checkAuth"
import { Navigate } from "react-router-dom"
import { setError } from "../reducers/auth/auth"
const Login = ()=>{

    const dispatch = useDispatch()

    const LogedIn = useSelector((state)=>state.Auth.login)
    const errors = useSelector((state)=>state.Auth.err)

    const handleSubmit = (e)=>{ 
    e.preventDefault()
    var name = e.target.name.value
    var password = e.target.password.value
    if(name !== "" && password !== "" ){
        dispatch(checkAuth({name,password}))
    }else{
        dispatch(setError())
    }
}
console.log(LogedIn)
if(LogedIn){
    return <Navigate to="/admin"/>
}
    return(
        <div className="logIn-page">
        <h1 style={{marginBottom:"20px"}}> تسجيل الدخول</h1>
        {errors ? <p className="text-error">{errors}</p>:""}
        <Formik
        initialValues={{name:"",password:""}}
        validationSchema={linkSchema}
        onSubmit={handleSubmit}

        >
            {(props)=>(
                <Form className="form"        
                onSubmit={handleSubmit}>
                    <InputGroup 
                    type="text"
                    label="الاسم"
                    name="name"
                    placeholder=" الاسم"
                    />
                    <InputGroup 
                    type="password"
                    label="كلمة المرور"
                    name="password"
                    placeholder=" كلمة المرور"
                    />
                         <button  className="form-btn" type="submit">دخول</button>
                </Form>
            )
            
        }

        </Formik>
   
        </div>
    )
}
export default Login