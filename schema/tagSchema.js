const yup = require("yup");

// Hidden for simplicity

exports.linkSchema = yup.object({
 
    name: yup.string().required(),

 
});
