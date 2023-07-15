import { useField } from "formik"
const TextearaGroup = ({label,...props})=>{
    const [field,meta]= useField(props)
    return(
        <div className="input-group" style={{height:"160px"}}>
            <label className={`input-group__label `} htmlFor="title">{label}</label>
            <textarea {...field} {...props}  className={`input-group__element  ${(meta.error && meta.touched) ? "border-error" : "border-success"} ` } rows="6"></textarea>
            <p className={(meta.error && meta.touched) ? "text-error" : ""} >{(meta.error && meta.touched) ? meta.error : ""}</p>
        </div>
    )
}
export default TextearaGroup