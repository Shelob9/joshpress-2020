import React from "react"
import PageTemplate from "../PageTemplate"
import { css, Styled } from "theme-ui"

export default ({ children, ...props }) => {
  return (
    <PageTemplate
      {...props}
      pageName={"privacy"}
      seoTitle={"Privacy Policy"}
      Content={() => (
        <article id={"privacy"}>
          <Styled.h2>Privacy Policy & Terms Of Service</Styled.h2>
          <Styled.p
            css={css({
              fontSize: "2em",
            })}
          >
            Surveillance is not neccasary.
          </Styled.p>
          <Styled.p>
            This website does not use cookies. This website collects no
            personally identifying data about visitors. You can not register for
            this website.
          </Styled.p>
        </article>
      )}
    />
  )
}
