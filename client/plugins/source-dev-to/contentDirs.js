const path = require("path")

//path to write content to.
const contentDir = path.resolve(__dirname, "../../content/dev-to")

//path to write content index to.
const indexFilePath = `${contentDir}/index.json`

//file path for article
function articleFilePath(article) {
  return `${contentDir}/${article.id}.json`
}

module.exports = {
  contentDir,
  indexFilePath,
  articleFilePath,
}
