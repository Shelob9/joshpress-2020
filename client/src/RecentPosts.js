import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostsStack from "./PostsStack"

//Show recent posts from a variety of sources
const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allBlogPost(limit: 6) {
        nodes {
          id
          slug
          excerpt
          title
          date
        }
      }
      allDevArticles(limit: 6) {
        nodes {
          article {
            description
            cover_image
            id
            published_timestamp
            title
            url
          }
        }
      }
    }
  `)

  const { allBlogPost, allDevArticles } = data

  let recentPosts = []
  const devToPosts =
    allDevArticles.hasOwnProperty("nodes") && allDevArticles.nodes.length
      ? allDevArticles.nodes.map((node) => {
          const { article } = node
          return {
            id: article.id,
            title: article.title,
            excerpt: article.description,
            image: article.cover_image,
            link: article.url,
            date: article.published_timestamp,
            internal: false,
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
            date: node.date,
            internal: true,
          }
        })
      : []

  recentPosts = [...devToPosts, ...blogPosts]
  recentPosts = recentPosts.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date)
  })

  return <PostsStack posts={recentPosts} />
}

export default RecentPosts
