---
layout: blog_post
title: Integrating git with your existing site
---
<h2>Better git it in your soul*</h2>
Git has a lot of great tutorials for getting started. There are also a 
number of great articles on how to use git and github for your workflow.

What I haven&#8217;t seen is an article on how to integrate git with your 
current site without storing any code on github. I&#8217;m writing this blog 
to create a quick reference for how to get up and running using git on your 
existing site.

<h2>Needed</h2>

I&#8217;m making the assumption that you have the following:
 * Knowledge of linux
 * A local development environment
 * <code>git-core</code> installed both locally and on your webserver
 * Keyless SSH access to your webserver
 
I&#8217;m using Ubuntu 12.04 locally, but I&#8217;d assume that most of this 
won&#8217;t be too different on a different distro or on Mac&#8212;I&#8217;m 
probably totoally wrong about that :)
