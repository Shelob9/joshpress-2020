require("dotenv").config();
const client = require("./twitterClient");
const db = require("./db");
//ID of last tweet indexed
const lastTweetId = db.get("metas").find({ key: "lastTweetRun" }).value().value;

function startsWith(text, startText) {
	return text.substr(0, startText.length) === startText;
}

function includesAny(text, searchWords) {
	return searchWords.some((searchWord) => {
		//console.log(text, searchWord, text.includes(searchWord));
		return text.includes(searchWord);
	});
}

function isNeato(text) {
	if (!text) {
		return { is: false, strong: false };
	}
	const is = includesAny(text, ["neato", "Neato"]);
	const strong = includesAny(text, ["This Looks Neato", "this looks neato"]);
	return { is, strong };
}

function isThanks(text) {
	if (!text) {
		return { is: false, strong: false };
	}
	const is = includesAny(text, [
		"with the internet",
		"Thanks",
		"thanks",
		"thank you",
		"thank you",
		"Thank you",
		"Star Wars",
	]);

	const strong = includesAny(text, [
		"Thank you for sharing this with the internet",
		"Thanks for sharing with the internet",
	]);
	return { is, strong };
}

function isStrongAgreement(text) {
	if (!text) {
		return { is: false, strong: false };
	}
	const is = includesAny(text, [
		"Agreement",
		"agreement",
		"agreements",
		"Strong",
		"strong",
	]);
	const strong = includesAny(text, ["Strong Agreement", "Strongest Agreement"]);
	return { is, strong };
}

const apiParams = {
	screen_name: "josh412",
	count: 200,
	exclude_replies: false,
	include_rts: true,
	//https://stackoverflow.com/a/40454382
	tweet_mode: "extended",
};
const backwards = true;

if (backwards) {
	//older tweets then last indexed tweet
	apiParams["max_id"] = lastTweetId;
} else {
	//newer tweets then last indexed tweet
	apiParams["since_id"] = lastTweetId;
}

function indexTweets() {
	let totals = {
		strongAgreement: 0,
		thanks: 0,
		neato: 0,
	};
	client.get("statuses/user_timeline", apiParams, function (error, tweets) {
		if (!error) {
			if (!tweets || !tweets.length) {
				console.log("No tweets found");
				return false;
			}
			tweets.map((tweet) => {
				const content = tweet.full_text;
				const id = tweet.id;
				let neato = isNeato(content);
				let thanks = isThanks(content);
				let strongAgreement = isStrongAgreement(content);
				if (neato.is) totals.neato++;
				if (strongAgreement.is) totals.strongAgreement++;
				if (thanks.is) totals.thanks++;
				db.get("tweets")
					.push({
						id,
						content,
						time: tweet.created_at,
						url: tweet.url,
						neato,
						thanks,
						strongAgreement,
					})
					.write();
			});
			//get first and last tweet ids
			const first = tweets.shift().id;
			const last = tweets.pop().id;
			db.get("metas")
				.find({ key: "lastTweetRun" })
				.assign({ value: last })
				.write();
			db.get("runTotals")
				.push({
					first,
					last,
					totals,
				})
				.write();

			console.log(totals);
			return true;
		} else {
			console.log(error);
			return false;
		}
	});
}
(() => {
	[...Array(10).keys()].forEach(indexTweets);
})();
