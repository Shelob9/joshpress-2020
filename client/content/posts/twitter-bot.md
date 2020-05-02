---
title: Building A Twitter Bot for My Gatsby Site
date: 2020-05-02
excerpt: This post is about creating a basic twitter bot to bring some of my tweets into my Gatsby site.
---

## Goals

I tweet a lot, it's a fun game. I have a few moves I enjoy overusing:

- "This Looks Neato" - Cool WordPress (mostly) things I want to promote and try out later. I want to automatically pull all of these tweets into a database or spreadsheat and create (draft?) posts on my site for each. Maybe, I'll write about them or ask others for their experience or ask the creator some questions -- I dunno...
- "Thank You For Sharing This With The Internet" I've been trying to be nicer and show more gratitude on Twitter. I think it would be fun to see all of these cool things that made me happy, in one gallery.
- "Strong Agreement" - For things I agree with. I might track these, but I don't want to get too attatched to my own agreement with myself.

There are a few others, that are just jokes and I'm not sure I want to track how invested I am in those.

One thing I'd like to track is out of context retweets. Not sure how to classify these. There are two types:

- Retweets from No Context \* accounts
- Retweets of a tweet that is part of a thread, and doesn't totally make sense on its own.

## Twittter Client

I used the twitter client to search my timeline for a batch of tweets. Them I ~~ used some string match/ search functions ~~ used machine learning to search the text of the tweet to see if they likey fall into any of the three categories.

The database records if a tweet matches the search and if it is a "strong" match or not. For example "This Looks Neato" is consider a strong match, while "looks neato" it a match, but not a match.

## Database

For the "database" of this project, I'm using [lowdb](https://www.npmjs.com/package/lowdb) to manage JSON files that are commit to the file system with git.
. At first I was using using [lodb](https://www.npmjs.com/package/lodb) beacuse I got confused between lodb and lowdb and one is a fork of the othe rand ahhhh JavaScript.

Honestly, I'm just trying to write this fast so I can rewrite it better with a technology I understand less.
