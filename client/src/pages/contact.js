import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

export default ({ children, ...props }) => {
  return (
    <Styled.root>
      <div>
        <Header title={"Contact"} {...props} />
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          <Styled.h2>Say Hi</Styled.h2>
          <Styled.ul>
            <Styled.li>
              <a href="https://twitter.com/josh412">Twitter</a>
            </Styled.li>
          </Styled.ul>
        </div>
      </div>
    </Styled.root>
  )
}
