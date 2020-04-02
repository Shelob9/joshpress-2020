import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

const Section = ({ url, about, title, linkText, years }) => (
  <React.Fragment key={url}>
    <Styled.h3>{title}</Styled.h3>
    <Styled.p>{about}</Styled.p>
    <Styled.ul>
      {years && <Styled.li>{years}</Styled.li>}
      {url ? (
        <Styled.li>
          <Styled.a href={url}>{linkText}</Styled.a>
        </Styled.li>
      ) : (
        <Styled.p>{linkText}</Styled.p>
      )}
    </Styled.ul>
  </React.Fragment>
)
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
        <Styled.p>Initial words</Styled.p>
        <Styled.h2>Work</Styled.h2>
        <section
          css={css({
            mx: `12`,
          })}
        >
          {[
            {
              title: "Saturday Drive: VP Of Engineering Experience",
              about:
                "Currently, I lead the engineering team that is responsible for the WordPress plugins Ninja Forms, Caldera Forms and SendWP.",
              url: "https://saturdaydrive.com",
              linkText: "Saturday Drive",
              years: "2019-present",
            },
            {
              title: "CalderaWP: Lead Developer/ Co-Owner",
              about:
                "I co-founded CalderaWP, lead development of the plugin Caldera Forms, as well as other plugins and web apps. I also oversaw",
              url: "https://CalderaForms.com",
              linkText: "CalderaWP",
              years: "2015-2019",
            },
            {
              title: "Pods: Junior Developer/ Community Manager",
              about: "Words",
              url: "https://pods.io",
              linkText: "Pods",
              years: "2014-2016",
            },
          ].map(p => (
            <Section key={p.url} {...p} />
          ))}
        </section>
        <Styled.h2>Writing</Styled.h2>
        <section>
          {[
            {
              title: "Torque Mag: A WPEngine Publication",
              about:
                "For many years I wrote about WordPress development and community for WPEngine's community site.",
              url: "https://torquemag.io/author/joshp/",
              linkText: "Torque",
            },
            {
              title: "DEV",
              about:
                "Recently I've been sharing short posts about JavaScript, TypeScript, PHP and WordPress development on dev.to",
              url: "https://dev.to/shelob9",
              linkText: "My Dev Posts",
            },
            {
              title: "Envato Tuts+",
              about:
                "I wrote about WordPress development for Tuts+ many years ago.",
              url: "https://tutsplus.com/authors/josh-pollock",
              linkText: "My Tuts+ Posts",
            },
          ].map(p => (
            <Section key={p.url} {...p} />
          ))}
        </section>
      </div>
    </div>
  </Styled.root>
)
