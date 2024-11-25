const router = require("express").Router();
const Create = require("../controller/imagerController");
const Login = require("../controller/imagerSigninController");

router.post('/create', Create.createImager);

router.post('/login', Login.Login);

router.get('/profiledata', Login.ReadUser);

module.exports = router;