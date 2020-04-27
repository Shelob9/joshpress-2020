import React from "react"
import { css, Styled, useColorMode } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import SEO from "gatsby-theme-blog/src/components/seo"
const white = "#fffcfc"
const black = "#585858"
const PageTemplate = (props) => {
  const { page, AfterContent, Content } = props
  const title = page ? page.frontmatter.title : null
  const subTitle = page ? page.frontmatter.subTitle : null
  const __html = page ? page.html : null
  const name = page ? page.name : null
  const seoTitle = props.seoTitle ? props.seoTitle : title
  function createMarkup() {
    return { __html }
  }

  const [colorMode] = useColorMode()
  const color = colorMode !== `light` ? white : black
  const a = {
    color,
    textDecoration: "none",
    ":hover,:focus": {
      textDecoration: "underline",
    },
  }

  const seoProps = {
    description: subTitle,
    lang: "en",
    keywords: ["Josh Pollock", "WordPress", "Laravel", "React"],
    title: seoTitle,
  }
  return (
    <React.Fragment>
      <Styled.root>
        <SEO {...seoProps} />
        <Header {...props} />
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
            a,
            code: { color: black },
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
              <a
                href={
                  props.sourceLink
                    ? props.sourceLink
                    : "https://github.com/Shelob9/joshpress-2020"
                }
              >
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
