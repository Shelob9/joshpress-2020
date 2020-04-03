const proxy = require("express-http-proxy");
const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;
const hasLegacyPost = path => {
	path = path.replace(/\/?$/, "/");
	const legacyPosts = require("../legacyPosts");
	return legacyPosts.includes(path);
};
app.use(function(req, res, next) {
	if (hasLegacyPost(req.path)) {
		res.redirect(301, `https://joshpress.net${req.path}`);
	}
	next();
});
app.use("/proxy", proxy("www.google.com"));
app.get("/a", (req, res) => {
	return res.json({ hi: "Roy" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
