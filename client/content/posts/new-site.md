---
title: New Internet Website
date: 2020-04-20
excerpt: This post is about how my new website works
---

I made a new site. This post, which is probably going to be a perpetual work in progress, is about how it works. One of my goals for this site is to have a place to play with Gatsby and static sites and to share what I've learned.

This site has a few components. The first is a Gatsby site, the second is a server built using [Express](http://expressjs.com/). Technically, this is a monorepo, with one package. The root of the repo is an express server and there is a "client" [workspace](https://classic.yarnpkg.com/en/docs/workspaces/) for the Gatsby site. I'm using [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to manage it as a monorepo. The root package has [wsrun](https://github.com/hfour/wsrun) as a dependency, which is a great tool for running commands across multiple workspaces.

I have also created a [Gatsby plugin](../../plugins/source-dev-to) for sourcing content from dev.to that is based on [this plugin](https://github.com/geocine/gatsby-source-dev).

Last year I used my existing WordPress-site and Gatsby to generate a static HTML export of the old content before I cancelled that hosting account. That site is maintained at https://legacy.joshpress.net and incorprated into the new site.

## The Express Server

The site is served by Express, this includes the Gatsby-generated static HTML. [You can read the server here](https://github.com/Shelob9/joshpress-2020/blob/master/index.js). Using Express for what I used it for is a totally over-kill. But I have some other things I wish to add to it later.

Right now it does three things:

- Serve the Gatsby site -- see below.
- Redirect some URLs to the legacy site.
- Say [Hi Roy](https://hiroy.club)

### Using Express To Serve A Gatsby Site

Gatsby is a static site generator. Beacuse I wanted to be able to integrate my own APIs, and to use Express for the redirects,

The server uses the generated HTML, not the current development version. Which is what I want in production. I would like to improve on this, and use the local server for performance testing in the future. In local development, the server runs of port 5000, and the Gatsby site runs on port 4000, so I can access both.

Express has [built-in middleware for static content](https://expressjs.com/en/starter/static-files.html). I used that to serve the generated HTML from the Gatsby site.

```js
// Serve the static files from the Gatsby app
app.use(express.static(path.join(__dirname, "client/public/")))

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"))
})
```

### 301 Redirects With Express

One other small thing I learned building this was how to do a 301 redirect with Express.js.

```js
app.use(function (req, res, next) {
  //This is basically [ //big list of paths ].includes(req.path);
  if (hasLegacyPost(req.path)) {
    res.redirect(301, `https://legacy.joshpress.net${req.path}`)
  }
  next()
})
```

## CI/ CD

The source code for the site is [on Github](https://github.com/Shelob9/joshpress-2020/).

Both the legacy site and the new site are hosted with [Render](https://render.com/). While I have used Google, Netlify and Ziet for node or static hosting, Render feels the simplest to me. Setting up PR review builds, and automatic deploys on merge to master was 100% seamless.

The legacy site uses their free static hosting and the new site is node app, which they charge for. The convience is worth it to me and it's still way cheaper than a managed WordPress host.

I am still setting up my Github actions.

## The Gatsby Site

The Gatsby site has two sources for content:

- Markdown -- used for page content and blog posts.
- [My dev.to posts](https://dev.to/shelob9). I am using [this source plugin](https://www.gatsbyjs.org/packages/gatsby-source-dev/)

I used the [theme blog plugin](https://www.gatsbyjs.org/packages/gatsby-theme-blog/) beacuse I wanted to get to know [theme-ui](https://) better. One bummer is that it uses theme-ui 2.x, not 3.x.

## Gatsby plugin

I created a [Gatsby plugin](https://github.com/Shelob9/joshpress-2020/tree/master/client/plugins/source-dev-to) for sourcing content from dev.to that is based on [this plugin](https://github.com/geocine/gatsby-source-dev).

I created it to solve two problems:

- I was getting 429 -- too many request -- API errors when building the site.
- I had no experience building a [Gatsby source plugin](https://www.gatsbyjs.org/docs/creating-a-source-plugin/).

Part of the plugin is a function that downloads all of the articles and writes them to JSON files. I can run that manually with `yarn source`. I guess I could also run it on a cron with Github actions. That would keep things in sync better, but it is not a pressing need.

It adds the same nodes as the original plugin. Instead of sourcing them from the dev.to API, it sources them from the JSON files that are written with `yarn source`.
