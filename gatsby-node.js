import legacyUrls from "./legacyUrls"
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  legacyUrls.forEach(uri => {
    createRedirect({
      fromPath: uri,
      toPath: `https://joshpress.net/${uri}`,
      isPermanent: true,
    })
  })
}
