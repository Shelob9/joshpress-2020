require("dotenv").config();
const client = require("./twitterClient");
var params = { screen_name: "josh412", count: 5 };
var lodb = require("lodb");
var db = lodb("db.json");
var neatoDb = lodb("neato.json");

function startsWith(text, startText) {
	return text.substr(0, startText.length) === startText;
}

function isNeato(text) {
	const is = text.includes("neato") || text.includes("Neato");
	const strong =
		startsWith(text, "This Looks Neato") ||
		startsWith(text, "this looks neato");
	return { is, strong };
}

client.get("statuses/user_timeline", params, function (
	error,
	tweets,
	response
) {
	if (!error) {
		tweets.map((tweet) => {
			//Save if is neato
			let neato = isNeato(tweet.text);
			if (neato.is) {
				//save in neato db
				neatoDb("tweets").push({
					id: tweet.id,
					content: tweet.text,
					time: tweet.created_at,
					...neato,
				});
			}
		});
	}
});
