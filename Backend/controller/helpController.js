const Help = require("../models/helpModel.js")

const CreateHelp = ( (req, res) => {
    const { name, email, topic, message } = req.body

    const newHelp = Help({
        name,
        email,
        topic,
        message
    })

    newHelp.save()
    .then( ()=> {
        res.json("Help is created")
    })
    .catch( (err) => {
        res.json("help creation fail")
    })
})

module.exports = { CreateHelp }