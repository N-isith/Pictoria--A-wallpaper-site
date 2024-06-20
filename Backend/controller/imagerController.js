const imagerCreate = require('../models/imagerModel.js');

const createImager = (async(req, res) => {
    const { username, password } = req.body;

    try {
        const existUser = await imagerCreate.findOne({ username });

        if (existUser) {
            console.log(Error)
            return res.status(400).json({ message: 'Email already exists.' });
        }
        const newImager = new imagerCreate({
            username,
            password
        });
        await newImager.save();

        res.status(201).json({ message: 'Imager created successfully', user: newImager });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Imager creation failed', error });
    }
});

module.exports = {createImager};