import *as yup from "yup"
// Hidden for simplicity

export const linkSchema = yup.object().shape({
 
    title: yup.string().required("لايمكن ان يكون الحقل فارغ"),
    content: yup.string().required("لايمكن ان يكون الحقل فارغ"),
 
});

