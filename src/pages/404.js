import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

export default ({ children, ...props }) => {
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
          404 :(
        </div>
      </div>
    </Styled.root>
  )
}
