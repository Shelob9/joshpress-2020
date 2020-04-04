import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import { OtherWritingSection } from "./writing"

export default ({ children, ...props }) => {
  return (
    <Styled.root>
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
            Since 2014, I've been a part of the WordPress open-source community.
            I've contributed to WordPress core, spoke at over twnty WordCamps,
            including WordCamp US and written a ton of tutorials about WordPress
            development.
          </Styled.p>
          <section id="work">
            <Styled.h3>
              Plugins, Companies and Communites I've Helped Build
            </Styled.h3>
            <Styled.h4>Pods Framework</Styled.h4>
            <Styled.p>
              I was the community manager, and a developer for the free plugin{" "}
              <a href="https://wordpress.org/plugins/pods/">Pods</a>. In
              addition to contributing to development, documentation and
              technical support, I helped created{" "}
              <a href="https://friends.pods.io/">Friends of Pods</a> --
              community fundraising program to fund the project.
            </Styled.p>
            <Styled.h4>CalderaWP</Styled.h4>
            <Styled.p>
              I was a co-owner and lead developer for CalderaWP. Our WordPress
              plugin <a href="https://calderaforms.com">Caldera Forms</a> grew
              to over 200,000 active installs. CalderaWP was aquired in 2019 by
              our favorite competitors: Saturday Drive, the creators of Ninja
              Forms.
            </Styled.p>
            <Styled.h4>Saturday Drive</Styled.h4>
            <Styled.p>
              After the acquisition of CalderaWP I joined the team at Saturday
              Drive, as "VP Of Engineering" experience. I'm focused on helping
              our team move to distributed work and modernizing the engineering
              process.
            </Styled.p>
          </section>
          <OtherWritingSection />

          <section id="life">
            <Styled.h2>I'm An Adult Human</Styled.h2>
            <Styled.p>
              I live in Pittsburgh, PA with my wife Alicia. I enjoy
              science-fiction books, films and movies, as well as other forms of
              entertainment. Also, I like coffee, OMG(s) why am I so typical?
            </Styled.p>
          </section>
        </section>
      </div>
    </Styled.root>
  )
}
