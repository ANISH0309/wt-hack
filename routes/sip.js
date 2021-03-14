const express = require("express");
const router = express.Router();

router.get("/sip", (req, res) => {
	res.render("sip");
});

module.exports = router;
