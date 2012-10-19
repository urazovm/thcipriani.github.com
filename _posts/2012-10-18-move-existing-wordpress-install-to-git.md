---
layout: blog_post
title: How I integrated git with our existing Wordpress site
---

Custom Channels has always had a soft-spot for Wordpress. And Custom Channels
has always had a soft-spot for 
[cowboy coding](http://www.bnj.com/cowboy-coding-pink-sombrero/). During the
course of my employment I&#8717;ve used Vim to edit the live site while, 
essentially, taking dictation from the higher-ups with no shame or fear. 
That has since ended, and we&#8717;re all better people for it.

Git has enabled us to:
1. **Be more creative**&#8212;when a typo is discovered, you want to fix it, 
  but sometimes you&#8217;ve mangled the local-copy of that file with some 
  cockamamie code that you can&#8717;t get quite working right. So to fix
  the typo on the site you&#8717;ll either cowboy code it, or you&#8717;ll 
  pull down a second local copy. **Stop this madness** with branches and merges
  you can switch from your cockamamie branch, to your production branch, modify, 
  push live without a second thought.

2. **Distribute the site easier**&#8212;I have a local copy of the git repo
  that runs under a virtual host on my local apache install. There&#8717;s 
  a copy on development box at work. If we ever have anyone else come in 
  they can easily grab a copy with <code>git clone ssh://path</code>. 
  Awesome!

3. **Actually test stuff**&#8212;
