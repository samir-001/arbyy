const yup = require("yup");

// Hidden for simplicity

exports.linkSchema = yup.object({
 
    name: yup.string().required(),
    contnet: yup.string().min(8).max(100).required(),

 
});
