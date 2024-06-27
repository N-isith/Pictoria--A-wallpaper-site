const router = require("express").Router();
const Create = require("../controller/imagerController");
const Login = require("../controller/imagerSigninController");

router.post('/imager/create', Create.createImager);

router.post('/imager/login', Login.Login);

router.get('/imager/profiledata', Login.ReadUser);

module.exports = router;