const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const hasLegacyPost = (path) => {
	path = path.replace(/\/?$/, "/");
	const legacyPosts = require("./legacyPosts");
	return legacyPosts.includes(path);
};

//Redirect middleware for legacy
app.use(function (req, res, next) {
	if (hasLegacyPost(req.path)) {
		res.redirect(301, `https://legacy.joshpress.net${req.path}`);
	}
	next();
});

// Transmit greetings to Roy
app.get("/hi", (req, res) => {
	res.status = 418;
	res.json({ hello: "Roy" });
});

app.get("/josh/bio", (req, res) => {
	res.status = 200;
	let bio = __dirname + "/client/content/pages/about.md";
	//let md = fs.readFileSync(__dirname + "/client/content/pages/about.md");
	res.json({
		//md,
		bio,
	});
});

app.get("/cv", (req, res) => {
	res.redirect(
		301,
		"https://docs.google.com/document/d/11aWg3N7ySk6D-luegGdLT6QIFUC7GoiabUsQW6a_wcA/export?format=pdf"
	);
});

app.get("/slides/js-testing", (req, res) => {
	res.redirect(
		301,
		"https://shelob9.github.io/testing-javascript-in-and-around-wordpress"
	);
});
//Status check
app.get("/status", (req, res) => {
	res.status = 200;
	res.json({ status: "OK" });
});

// Serve the static files from the Gatsby app
app.use(express.static(path.join(__dirname, "client/public/")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

//Start on 5000.
const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
