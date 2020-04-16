import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import RecentPosts from "../RecentPosts"

export default ({ children, ...props }) => {
  const page = props.data.allFile.nodes[0].childMarkdownRemark
  const title = page.frontmatter.title
  const html = page.html
  function createMarkup() {
    return { __html: html }
  }
  return (
    <Styled.root>
      <div>
        <Header title={title} {...props} />
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          <section id="about">{title}</section>
          <div dangerouslySetInnerHTML={createMarkup()} />
          <section id="writing">
            <Styled.h2>I've Written Quite A Bit About Writing Code</Styled.h2>
            <RecentPosts />
          </section>
        </div>
      </div>
    </Styled.root>
  )
}

export const query = graphql`
  {
    allFile(filter: { name: { eq: "index" } }) {
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
