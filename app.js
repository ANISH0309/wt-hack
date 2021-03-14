const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

app.engine(
	".hbs",
	exphbs({
		defaultLayout: "main",
		extname: ".hbs",
	})
);
app.set("view engine", ".hbs");
app.use(express.static("assets"));

app.get("/", (req, res) => {
	res.render("layouts/main");
});

app.listen(5000, () => {
	console.log("Listening on port " + 5000);
});
