const crypto = require("crypto")
const fs = require("fs")
const contentDirs = require("./contentDirs")
const { indexFilePath, articleFilePath } = contentDirs
exports.sourceNodes = async ({ actions }, { username }) => {
  //Get the articles index
  let articles = JSON.parse(
    fs.readFileSync(indexFilePath, { encoding: "utf8" })
  )

  const { createNode } = actions

  if (!username) {
    username = "shelob9"
  }

  //Read all articles from file and make them into nodes
  articles.forEach((article) => {
    const jsonString = fs.readFileSync(articleFilePath(article), {
      encoding: "utf8",
    })

    const gatsbyNode = {
      article: Object.assign({}, article),
      id: `${article.id}`,
      parent: "__SOURCE__",
      children: [],
      internal: {
        type: "DevArticles",
        contentDigest: crypto
          .createHash("md5")
          .update(jsonString)
          .digest("hex"),
      },
    }

    createNode(gatsbyNode)
  })
}
