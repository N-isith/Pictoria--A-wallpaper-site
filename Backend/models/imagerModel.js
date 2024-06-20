const mongoose = require("mongoose");
const yup = require("yup");

const schema = mongoose.Schema;

const ImagerValidateSchema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(8, "Password should have atleast 8 characters").max(40).required()
})

const ImagerSchema = new schema( {
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

ImagerSchema.pre('save', async function(next){
    try {
        await ImagerValidateSchema.validate(this.toObject());
        next();
    }
    catch (error) {
        next(error);        
    }
})

const imagerModel = mongoose.model("imager", ImagerSchema);

module.exports = imagerModel;