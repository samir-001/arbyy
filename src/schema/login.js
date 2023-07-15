import *as yup from "yup"
// Hidden for simplicity

export const linkSchema = yup.object().shape({
 
    name: yup.string().required("لايمكن ان يكون الحقل فارغ"),
    password: yup.string().required("لايمكن ان يكون الحقل فارغ"),
 
});

