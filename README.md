# JoshPress.net 2020

Source for JoshPress.net.

## Development

- Clone
- Install
  - `yarn`
- Start development servers
  - `yarn start`
- Build Gatsby site
  - `yarn build:client`
- Serve - For Local Testing
  - `yarn serve`
  - Will rebuild site, before starting server on port 5000.
  - In this mode the server WILL work as a proxy for the site.
- Serve - On Real Server With Site Already Generated
  - `node index.js`
- Rewrite content from dev.to
  - `yarn source`

## Overview

This repo has two components:

- `client`

  - A Gatsby site

- `server`
  - Express server.

The server is responsible for:

- Checking if the current request is for a post from my old WordPress site, which I converted to HTML using Gatsby awhile back. That site was moved to legacy.joshpress.net. The server handles the 301 redirects.
- Serving the static site, generated with Gatsby.
- Other
