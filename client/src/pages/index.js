import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
export default ({ children, ...props }) => (
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
        <Styled.p>Hi.</Styled.p>
        <section>
          <Styled.p>
            {" "}
            Praesent a urna sit amet erat pretium euismod. Integer hendrerit
            mollis diam, faucibus facilisis arcu dignissim non. Duis euismod ex
            arcu, quis mattis nibh consequat vitae. Cras ultricies, turpis ut
            pulvinar dictum,{" "}
          </Styled.p>
        </section>
        <section>
          <Styled.h2>Work</Styled.h2>

          <dl>
            <dt>Saturday Drive: VP Of Engineering Experience</dt>
            <dd>
              Enginering team lead, helping build Ninja Forms and Caldera Forms
              WordPress plugins and tranistion to remote work.
            </dd>
            <dd>2019-Present</dd>
            <dt>CalderaWP: Co-Owner/ Lead Developer</dt>
            <dd>...</dd>
            <dd>Founded: 2015. Aquired: 2019</dd>
            <dt>Pods Framework: Community Manager/ Developer</dt>
            <dd>
              Developed features, fixed bugs, wrote documentation and offered
              support for the free WordPress plugin Pods. Also, created a
              community fundraising program to fund the project.
            </dd>
            <dd>2014-2015</dd>
          </dl>
        </section>
        <section>
          <Styled.h2>Writing</Styled.h2>

          <dl>
            <dt>Torque Mag: A WPEngine Publication</dt>
            <dd>
              For many years I wrote about WordPress development and community
              for WPEngine's community site.
            </dd>
            <dd>
              <a href="https://torquemag.io/author/joshp/">Torque</a>
            </dd>
            <dt>DEV</dt>
            <dd>
              Recently I've been sharing short posts about JavaScript,
              TypeScript, PHP and WordPress development on dev.to
            </dd>
            <dd>
              <a href="https://dev.to/shelob9">My Dev Posts</a>
            </dd>
            <dt>Envato Tuts+</dt>
            <dd>
              I wrote about WordPress development for Tuts+ many years ago.
            </dd>
            <dd>
              <a href="https://tutsplus.com/authors/josh-pollock">
                My Tuts+ Posts
              </a>
            </dd>
          </dl>
        </section>
        <section>
          <Styled.h2>Social Media</Styled.h2>
          <ul>
            <li>
              <a href="https://twitter.com/josh412">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/shelob9">Githun</a>
            </li>
            <li>
              <a href="https://www.instagram.com/pollockjosh/">Instagram</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </Styled.root>
)
