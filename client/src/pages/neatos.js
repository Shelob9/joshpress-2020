import React from "react";
import { graphql } from "gatsby";
import PageTemplate from "../PageTemplate";
import OneTweet from "../OneTweet";
const Neatos = ({ data, ...props }) => {
	const neatos = data.allSitePage.nodes[0];
	console.log(neatos);
	return (
		<PageTemplate
			{...props}
			pageName={"neato"}
			seoTitle={"A Long List Of Tweets I Thaught Were Neato"}
			Content={() => (
				<React.Fragment>
					{neatos.map((tweet) => (
						<OneTweet tweet={tweet} key={tweet.id} />
					))}
				</React.Fragment>
			)}
		/>
	);
};

export const query = graphql`
	{
		allSitePage(filter: { path: { regex: "/^/neato/" } }) {
			nodes {
				path
			}
		}
	}
`;

export default Neatos;
