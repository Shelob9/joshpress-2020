import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

const PageTemplate = (props) => {
  const { page, AfterContent, Content } = props
  const title = page ? page.frontmatter.title : null
  const subTitle = page ? page.frontmatter.subTitle : null
  const __html = page ? page.html : null
  const name = page ? page.name : null

  function createMarkup() {
    return { __html }
  }
  return (
    <Styled.root>
      <Header {...props} />
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          py: 4,
        })}
      >
        {Content ? (
          <Content />
        ) : (
          <article id={name}>
            {title && <Styled.h2>{title}</Styled.h2>}
            {subTitle && (
              <Styled.p
                css={css({
                  fontSize: "2em",
                })}
              >
                {subTitle}
              </Styled.p>
            )}
            {__html && <div dangerouslySetInnerHTML={createMarkup()} />}
            {AfterContent && <AfterContent />}
          </article>
        )}
      </div>
    </Styled.root>
  )
}

export default PageTemplate
