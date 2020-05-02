const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
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
