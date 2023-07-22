const yup = require("yup");

// Hidden for simplicity

exports.linkSchema = yup.object({
 
    name: yup.string().required(),
    password: yup.string().min(6).max(32).required(),


 
});
