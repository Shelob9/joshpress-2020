import React from "react"
import PageTemplate from "../PageTemplate"
export default ({ children, ...props }) => {
  return <PageTemplate {...props} />
}
export const query = graphql`
  {
    allFile(filter: { name: { eq: "about" } }) {
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
