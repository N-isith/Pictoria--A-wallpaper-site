const router = require("express").Router();
const imagerObject = require("../controller/imagerController");

router.post('imager/create', imagerObject.createImager);


module.exports = router;