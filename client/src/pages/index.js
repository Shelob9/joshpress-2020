import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import PostsStack from "../PostsStack"
import { graphql } from "gatsby"

export default ({ children, data, ...props }) => {
  const { allDevNode, allBlogPost } = data
  console.log(allBlogPost)
  let recentPosts = []
  const devToPosts =
    allDevNode.hasOwnProperty("nodes") && allDevNode.nodes.length
      ? allDevNode.nodes.map((node) => {
          return {
            id: node.id,
            title: node.frontmatter.title,
            excerpt: node.frontmatter.description,
            image: node.frontmatter.cover,
            link: node.preview,
          }
        })
      : []

  const blogPosts =
    allBlogPost.hasOwnProperty("nodes") && allBlogPost.nodes.length
      ? allBlogPost.nodes.map((node) => {
          return {
            id: node.id,
            title: node.title,
            excerpt: node.excerpt,
            image: "",
            link: `${node.slug}`,
          }
        })
      : []

  recentPosts = [...devToPosts, ...blogPosts]
  recentPosts = recentPosts.sort((a, b) => b.date > a.date)

  return (
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
          <section id="about">
            <Styled.h2>About Me</Styled.h2>
            <Styled.p
              css={css({
                fontSize: "2em",
              })}
            >
              I make commerical open source products, mainly with WordPress.
            </Styled.p>
            <Styled.p>
              Right now, I help build{" "}
              <a href="https://ninjaforms.com">Ninja Forms</a>,
              <a href="https://calderaforms.com">Caldera Forms</a> and{" "}
              <a href="https://sendwp.com">SendWP</a> at{" "}
              <a href="https://SaturdayDrive.com">Saturday Drive</a>.
            </Styled.p>
            <Styled.p>
              <a href="/about">This website features an about page.</a>
            </Styled.p>
          </section>
          <section id="writing">
            <Styled.h2>I've Written Quite A Bit About Writing Code</Styled.h2>
            <PostsStack posts={recentPosts} />
          </section>
        </div>
      </div>
    </Styled.root>
  )
}

export const query = graphql`
  query blogPosts {
    allBlogPost(limit: 6) {
      nodes {
        id
        slug
        excerpt
        title
      }
    }
    allDevNode(limit: 6) {
      nodes {
        id
        frontmatter {
          title
          cover
          description
        }
        preview
      }
    }
  }
`
