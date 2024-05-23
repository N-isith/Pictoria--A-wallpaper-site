const mongoose = require("mongoose");

const schema = mongoose.Schema;

const imagerSchema = new schema( {
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const imagerModel = mongoose.model("imager", imagerSchema);

module.exports = imagerModel;