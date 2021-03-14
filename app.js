const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const router = require("./routes/sip");

const app = express();

app.engine(
	".hbs",
	exphbs({
		defaultLayout: "main",
		// layoutsDir: __dirname + "/views/layouts/",
		extname: ".hbs",
	})
);

app.set("view engine", ".hbs");
// app.set("views", path.join(__dirname, "views"));

app.use(express.static("assets"));

app.get("/", (req, res) => {
	res.render("layouts/main");
});

// Routes
app.use("/sip", require("./routes/sip"));

// router.get("/sip", (req, res) => {
// 	res.render("sip");
// });

// app.get("/sip", (req, res) => {
// 	res.render("sip.hbs");
// });

app.listen(5000, () => {
	console.log("Listening on port " + 5000);
});
