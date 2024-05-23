const Imager = require('../models/imagerModel.js');

const createImager = (async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newImager = new Imager({
        username,
        password,
    });

    newImager.save()
    .then( () => {
        res.json("Imager Created.");
    })
    .catch( (err) => {
        res.json("Imager creation failed", err);
        console.log(err);
    })
    
});

module.exports = {createImager};