import { useField } from "formik"
const InputGroup = ({label,...props})=>{
    const [field,meta]= useField(props)
    return(
        <div className="input-group">
            <label className={`input-group__label `} htmlFor="title">{label}</label>
            <input {...field} {...props}  className={`input-group__element  ${(meta.error && meta.touched) ? "border-error" : "border-success"} `}></input>
            <p className={(meta.error && meta.touched) ? "text-error" : ""} >{(meta.error && meta.touched) ? meta.error : ""}</p>
        </div>
    )
}
export default InputGroup