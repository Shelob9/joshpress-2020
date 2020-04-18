const PageTemplate = (props) => {
  const page = props.data.allFile.nodes[0].childMarkdownRemark
  const title = page.frontmatter.title
  const subTitle = page.frontmatter.subTitle
  const __html = page.html
  const name = page.name

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
        </article>
      </div>
    </Styled.root>
  )
}
export default PageTemplate
