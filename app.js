const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const sip = require("./routes/sip");
const expense = require("./routes/expense");

const app = express();

app.engine(
	".hbs",
	exphbs({
		defaultLayout: "main",
		extname: ".hbs",
	})
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("assets"));

// Routes

app.use("/", require("./routes/index"));
app.use("/sip", sip);
app.use("/expense", expense);

app.listen(5000, () => {
	console.log("Listening on port " + 5000);
});
