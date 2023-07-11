const yup = require("yup");

// Hidden for simplicity

exports.linkSchema = yup.object({
 
    name: yup.string().required(),
    content: yup.string().min(8).max(250).required(),

 
});
