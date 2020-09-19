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
            <ul>
              <li>
                <Styled.a href={"/writing"}>Recent Published Posts</Styled.a>
              </li>
              <li>
                <Styled.a href={"https://garden.joshpress.net"}>
                  Digital Garden: Notes and Clippings
                </Styled.a>
              </li>
              <li>
                <Styled.a
                  href={"https://react-wordpress-testing.joshpress.net"}
                >
                  React Testing In And Around WordPress
                </Styled.a>
              </li>
              <li>
                <Styled.a
                  href={"https://codesandbox.io/s/react-context-tldr-bey3y"}
                >
                  React Context: TL;DR
                </Styled.a>
              </li>
              <li>
                <Styled.a
                  href={"https://pantheon.io/blog/typescript-wordpress-basics"}
                >
                  Basic Typescript For WordPress Developers
                </Styled.a>
              </li>
            </ul>
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
