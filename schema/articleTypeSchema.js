const yup = require("yup");

// Hidden for simplicity

exports.linkSchema = yup.object({
 
    title: yup.string().required(),
    content: yup.string().required(),

 
});
