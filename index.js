const express = require("express");
const path = require("path");

const app = express();

const hasLegacyPost = (path) => {
	path = path.replace(/\/?$/, "/");
	const legacyPosts = require("./legacyPosts");
	return legacyPosts.includes(path);
};

app.use(function (req, res, next) {
	if (hasLegacyPost(req.path)) {
		res.redirect(301, `https://legacy.joshpress.net${req.path}`);
	}
	next();
});

// Serve the static files from the Gatsby app
app.use(express.static(path.join(__dirname, "client/public/")));

// An api endpoint that returns a short list of items
app.get("/api/items", (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log("Sent list of items");
});

const port = process.env.PORT || 5000;
app.listen(port);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

console.log("App is listening on port " + port);
