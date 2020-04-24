import React from "react"
import PageTemplate from "../PageTemplate"

export default ({ children, ...props }) => {
  const page = props.data.allFile.nodes[0].childMarkdownRemark

  return <PageTemplate {...props} page={page} pageName={"about"} />
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
