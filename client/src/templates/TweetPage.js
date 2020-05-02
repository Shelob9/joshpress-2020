import React from "react";
import PageTemplate from "../PageTemplate";
import OneTweet from "../OneTweet";

export default ({ seoTitle, tweet, ...props }) => {
	return (
		<PageTemplate
			{...props}
			page={undefined}
			pageName={`tweet-${tweet.id}`}
			seoTitle={seoTitle}
			subTitle={tweet.content}
			content={() => <OneTweet tweet={tweet} />}
		/>
	);
};
