const crypto = require("crypto")
const queryString = require("query-string")
const axios = require("axios")
const path = require("path")
const fs = require("fs")
const contentDirs = require("./contentDirs")
const { contentDir, indexFilePath, articleFilePath } = contentDirs
//dev.to username
let username = "shelob9"

const encoding = "utf8"

async function getArticlesIndex() {
  const params = queryString.stringify({
    username,
  })

  //Get the list of articles
  // eslint-disable-next-line no-await-in-loop
  const res = await axios.get(`https://dev.to/api/articles?${params}`, {
    headers: {},
  })

  const { data } = res

  fs.writeFileSync(indexFilePath, JSON.stringify(data), encoding)
  return data
}

//Get articles and write to file
async function getArticles(data) {
  // eslint-disable-next-line no-restricted-syntax
  for (const article of data) {
    // eslint-disable-next-line no-await-in-loop
    const articleResult = await axios.get(
      `https://dev.to/api/articles/${article.id}`
    )
    // eslint-disable-next-line no-await-in-loop
    const articleData = await articleResult.data
    fs.writeFileSync(
      articleFilePath(article),
      JSON.stringify(articleData),
      encoding
    )
  }
}

getArticlesIndex()
const data = JSON.parse(fs.readFileSync(indexFilePath, { encoding }))

getArticles(data)
