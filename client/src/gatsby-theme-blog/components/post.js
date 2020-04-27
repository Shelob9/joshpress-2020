import React from "react"
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
  const postTitle = post.title
  return (
    <PageTemplate
      sourceLink={`https://github.com/Shelob9/joshpress-2020/tree/master/client/content/posts/${sourceFileName}.md`}
      location={location}
      title={title}
      seoTitle={post.title}
      pageName={`post-${post.id}`}
      Content={() => (
        <React.Fragment>
          <article>
            <PostTitle>{postTitle}</PostTitle>
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
