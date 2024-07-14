const router = require("express").Router()
const HelpCtrl = require("../controller/helpController")

router.post("/help/add", HelpCtrl.CreateHelp)

module.exports = router