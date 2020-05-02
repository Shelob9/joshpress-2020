import React from "react";
import TweetPage from "./TweetPage";

export default ({ children, ...props }) => {
	return (
		<TweetPage
			{...props}
			tweet={props.pageContext.tweet}
			seoTitle={"Something I Thaught Was Neato"}
		/>
	);
};
