require("dotenv").config();
const client = require("./twitterClient");
var params = { screen_name: "josh412", count: 2 };
client.get("statuses/user_timeline", params, function (
	error,
	tweets,
	response
) {
	if (!error) {
		console.log(tweets);
	}
});
