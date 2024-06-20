const ImagerSignin = require("../models/imagerModel.js");

const Login = (req, res) => {
    const { username, password } = req.body;

    ImagerSignin.findOne({ username: username })
    .then( imager => {
        if(imager.password === password){
            res.status(200).json({ message: 'Authentication successful', imager });
        }
        else{
            res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }
    })
    .catch( (err) => {
        res.status(401).json({message: 'Internal server error', err});
    })
}


module.exports = {Login};