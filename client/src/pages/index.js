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
              <Styled.a href="https://ninjaforms.com">Ninja Forms</Styled.a>,
              <Styled.a href="https://calderaforms.com">Caldera Forms</Styled.a>{" "}
              and <Styled.a href="https://sendwp.com">SendWP</Styled.a> at{" "}
              <Styled.a href="https://SaturdayDrive.com">
                Saturday Drive
              </Styled.a>
              .
            </Styled.p>
            <Styled.p>
              <Styled.a href="/about">
                This website features an about page.
              </Styled.a>
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
