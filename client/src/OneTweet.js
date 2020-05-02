import React from "react";
import { Styled, css } from "theme-ui";

const OneTweet = ({ tweet }) => (
	<article id={`tweet-${tweet.id}`}>
		<Styled.p
			css={css({
				fontSize: "2em",
			})}
		>
			<Styled.a href={tweet.url}>{tweet.content}</Styled.a>
		</Styled.p>
		)}
	</article>
);

export default OneTweet;
