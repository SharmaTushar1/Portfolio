---
title: 'Two Forms of Pre-rendering'
date: '2023-03-14'
tags: ['tag-1', 'tag-2', 'tag-3']
description: 'This is the description of my test blog post original'
timeToRead: '1' # this will be calculated by selecting all the words and then dividing it by 4 and dividing it by 250 (average reading speed) # todo: change this to actual code instead of manually calculating like a chimpanzee
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.