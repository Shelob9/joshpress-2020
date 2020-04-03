import React from "react"
import { css, Styled } from "theme-ui"

export default function PostsStack({ posts }) {
  return (
    <ul
      css={css({
        listStyle: "none",
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",
        m: 0,
        px: 3,
        py: 4,
      })}
    >
      {posts.map(post => (
        <li key={post.id} sx={{}}>
          <Styled.h2
            css={css({
              m: 0,
            })}
          >
            <a
              href={post.link}
              sx={{
                color: "inherit",
                textDecoration: "none",
                ":hover,:focus": {
                  color: "primary",
                  textDecoration: "underline",
                },
              }}
            >
              {post.title}
            </a>
          </Styled.h2>
          <small sx={{ fontWeight: "bold" }}>{post.date}</small>
          <Styled.p
            css={css({
              m: 0,
            })}
          >
            {post.excerpt}
          </Styled.p>
        </li>
      ))}
    </ul>
  )
}
