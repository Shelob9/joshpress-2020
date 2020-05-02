const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const neatos = await graphql(`
		query {
			allJoshbotDataJson(
				filter: {
					tweets: {
						elemMatch: {
							thanks: { is: {} }
							strongAgreement: { is: {} }
							neato: { strong: { eq: false }, is: { eq: true } }
						}
					}
				}
			) {
				nodes {
					tweets {
						id
						content
					}
				}
			}
		}
	`);
	console.log(
		"Total Neatos: ",
		neatos.data.allJoshbotDataJson.nodes[0].tweets.length
	);

	neatos.data.allJoshbotDataJson.nodes[0].tweets.forEach((tweet) => {
		createPage({
			path: `/neato/${tweet.id}`,
			component: path.resolve(`./src/templates/neato.js`),
			context: {
				tweet: {
					id: tweet.id,
					content: tweet.content,
					url: `https://twitter.com/anyuser/status/${tweet.id}`,
				},
			},
		});
	});
};
