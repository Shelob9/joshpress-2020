import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import { OtherWritingSection } from "./writing"

export default ({ children, ...props }) => {
  const page = props.data.allFile.nodes[0].childMarkdownRemark
  const title = page.frontmatter.title
  const html = page.html
  function createMarkup() {
    return { __html: html }
  }
  return (
    <Styled.root>
      <Header title={title} {...props} />
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
          <div dangerouslySetInnerHTML={createMarkup()} />
        </section>
      </div>
    </Styled.root>
  )
}
export const query = graphql`
  {
    allFile(filter: { name: { eq: "about" } }) {
      nodes {
        childMarkdownRemark {
          html
          frontmatter {
            title
            excerpt
          }
        }
      }
    }
  }
`
