import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import RecentPosts from "../RecentPosts"

export default ({ children, ...props }) => {
  return (
    <Styled.root>
      <div>
        <Header title={"Josh Pollock"} {...props} />
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          <section id="about">
            <Styled.h2>About Me</Styled.h2>
            <Styled.p
              css={css({
                fontSize: "2em",
              })}
            >
              I make commerical open source products, mainly with WordPress.
            </Styled.p>
            <Styled.p>
              Right now, I help build{" "}
              <a href="https://ninjaforms.com">Ninja Forms</a>,
              <a href="https://calderaforms.com">Caldera Forms</a> and{" "}
              <a href="https://sendwp.com">SendWP</a> at{" "}
              <a href="https://SaturdayDrive.com">Saturday Drive</a>.
            </Styled.p>
            <Styled.p>
              <a href="/about">This website features an about page.</a>
            </Styled.p>
          </section>
          <section id="writing">
            <Styled.h2>I've Written Quite A Bit About Writing Code</Styled.h2>
            <RecentPosts />
          </section>
        </div>
      </div>
    </Styled.root>
  )
}
