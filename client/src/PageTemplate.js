import React from "react"
import { css, Styled, useColorMode } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

const white = "#fffcfc"
const black = "#585858"
const PageTemplate = (props) => {
  const { page, AfterContent, Content } = props
  const title = page ? page.frontmatter.title : null
  const subTitle = page ? page.frontmatter.subTitle : null
  const __html = page ? page.html : null
  const name = page ? page.name : null
  function createMarkup() {
    return { __html }
  }

  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const a = {
    color: isDark ? white : black,
    textDecoration: "dotted",
    ":hover,:focus": {
      color: isDark ? "#fffcfc" : "#595959",
      textDecoration: "underline",
    },
  }
  return (
    <React.Fragment>
      <Styled.root>
        <Header {...props} />
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
            a,
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
          <footer
            css={css({
              mx: `auto`,
              px: 3,
              py: 4,
              a,
            })}
          >
            <Styled.p>
              <a href="https://github.com/Shelob9/joshpress-2020">
                View Source
              </a>
            </Styled.p>
          </footer>
        </div>
      </Styled.root>
    </React.Fragment>
  )
}

export default PageTemplate
