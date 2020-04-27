import React from "react"
import { css, Styled } from "theme-ui"
import RecentPosts from "../RecentPosts"
import PageTemplate from "../PageTemplate"

export default ({ children, ...props }) => {
  const page = props.data.allFile.nodes[0].childMarkdownRemark
  return (
    <PageTemplate
      {...props}
      page={page}
      pageName={"index"}
      seoTitle={"Josh Pollock"}
      AfterContent={() => (
        <React.Fragment>
          <section id="writing">
            <Styled.h2>I've Written Quite A Bit About Writing Code</Styled.h2>
            <Styled.h3>Recent Posts</Styled.h3>
            <RecentPosts total={4} />
            <Styled.a href={"/writing"}>More</Styled.a>
          </section>
        </React.Fragment>
      )}
    />
  )
}
export const query = graphql`
  {
    allFile(filter: { name: { eq: "index" } }) {
      nodes {
        name
        childMarkdownRemark {
          html
          frontmatter {
            title
            excerpt
            subTitle
          }
        }
      }
    }
  }
`
