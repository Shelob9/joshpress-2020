import React from "react"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"

import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PageTemplate from "../../PageTemplate"
import { MDXRenderer } from "gatsby-plugin-mdx"

function Post({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) {
  let sourceFileName = post.slug.replace("/blog/", "").replace("/", "")
  return (
    <PageTemplate
      sourceLink={`https://github.com/Shelob9/joshpress-2020/tree/master/client/content/posts/${sourceFileName}.md`}
      location={location}
      title={title}
      pageName={`post-${post.id}`}
      Content={() => (
        <React.Fragment>
          <SEO
            title={post.title}
            description={post.excerpt}
            keywords={post.keywords}
          />
          <article>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
          <PostFooter {...{ previous, next }} />
        </React.Fragment>
      )}
    />
  )
}

export default Post
