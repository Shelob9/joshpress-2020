const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const dbPath =
	require("path").resolve(__dirname + "/..") +
	"/client/content/joshbot-data/neato.json";
const db = low(new FileSync(dbPath));
db.defaults({
	tweets: [],
	runTotals: [],
	metas: [
		{
			key: "lastTweetRun",
			value: 1256638716011044900,
		},
	],
}).write();

module.exports = db;
