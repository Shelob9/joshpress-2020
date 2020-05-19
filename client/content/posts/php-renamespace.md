---
title: Top 27 Ways To Renamspace PHP Code
date: 2020-05-20
excerpt: If you have more than one version of a PHP dependency from different WordPress plugins this can be a problem.
---

This is a work in progress list of ways to avoid errors caused when one WordPress plugin uses the same composer dependency as another plugin, but they are different versions.

## Just Use Bash Scripts
This might all be madeness. Maybe [sed](https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/) is all we need?

## Motzart

## php-scoper
* [php-scoper](https://github.com/humbug/php-scoper)
* [Usage in Yoast SEO](https://github.com/Yoast/wordpress-seo/blob/trunk/composer.json#L114-L135)
* [Usage In Google SiteKit](https://github.com/google/site-kit-wp/issues/612)
* [Usage walk through by Delicious Brains](https://deliciousbrains.com/php-scoper-namespace-composer-depencies/)

## Imposter Plugin
* [source](https://github.com/TypistTech/imposter-plugin)
* [Suggested in WordPress AMP Plugin](https://github.com/ampproject/amp-wp/issues/1867#issuecomment-499672594)
* [Example in wp-cloudflare-guard](https://github.com/TypistTech/wp-cloudflare-guard/blob/master/composer.json#L90-L107)
