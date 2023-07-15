import { Formik ,Form} from "formik"
import {linkSchema} from "../schema/article"
import InputGroup from "../components/inputGroup"
import TextearaGroup from "../components/textearaGroup"
const ArticleForm = ()=>{

    return(
        <>
        <h1 style={{marginBottom:"20px"}}> بيانات المقال</h1>
        <Formik
        initialValues={{title:"",content:""}}
        validationSchema={linkSchema}
        >
            {(props)=>(
                <Form className="form">
                    <InputGroup 
                    label="العنوان"
                    name="title"
                    placeholder=" العنوان"
                    />
                    <TextearaGroup 
                    label="المحتوي"
                    name="content"
                    placeholder=" المحتوي"
                    />
                    <div>
                        <button className="form-btn">حفظ</button>
                    </div>
                </Form>
            )
            
        }

        </Formik>
   
        </>
    )
}
export default ArticleForm