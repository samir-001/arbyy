const yup = require("yup");

// Hidden for simplicity

exports.linkSchema = yup.object({
 
    id: yup.string().required(),
    contnet: yup.string().min(3).max(100).required(),

 
});
