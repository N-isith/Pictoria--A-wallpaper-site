const router = require("express").Router();
const Create = require("../controller/imagerController");
const Login = require("../controller/imagerSigninController");

router.post('/imager/create', Create.createImager);

router.get('/imager/login', Login.Login);

module.exports = router;