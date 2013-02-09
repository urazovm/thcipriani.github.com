---
layout: blog_post
title: Vim, the OSX clipboard and Tmux
---
I've been an Ubuntu user for 4 years now. Since I started working at Upsync 3 months ago, I&#8217;ve found myself a very lonely desktop Linux user. Also, since this job is my first heavy-duty exposure to back-end web development, I&#8217;ve found myself a very confused desktop Linux user.

While there are many tools for working on a website backend available in Ubuntu, few are as shiny as those available in OSX (Charles Proxy, usable in Chrome. I want that. I want it hard.). Also, want to do any iOS work? (you know I do)&mdash;then you <em>must</em> have a mac.

On the flip side there is my natural inclination to be a bit of a contrarian and principles and such&#8230;

##&#8230;but it&#8217;s so shiny!

I&#8217;ve caved. I&#8217;m a sell-out. I&#8217;m not the cool hardcore ideologue I once believed myself to be. You know those hypothetical, <em>which-side-of-history-would-you-be-on-type</em>, questions? Well, I can now safely say that I would <em>not</em> have been in the French Resistance.

I&#8217;m typing this on the beautiful back-lit keyboard of a brand-new, core-i7-having, 8GB-RAM-possesing, 256GB-SSD-not-spinning monster that is a 13&#8243; MacBook Air.

##I thought this was supposed to be easy

The first thing I did was get iTerm 2 up and running and then install Homebrew. After removing the dumb &#8220;Natural&#8221; scrolling and using PCKeyboard hack to remap some keys, I&#8217;m working exactly as I was before. I really can&#8217;t tell a difference. Which is a little anti-climactic for a computer that cost as much as my first car (oh, how I miss that purple Taurus!).

It was really easy to everything setup as it was before, except&#8230;Vim&#8230;my clipboard&#8230;Tmux&#8230;they didn&#8217;t work together and that was CRIPPLING! Seriously, I depend on those things working together.

This post is written as a little reminder to myself of how I got it all up and running again.

##The process

1. **Install Homebrew:**<br />Instructions are available on <a href="http://mxcl.github.com/homebrew/" target="_blank" title="Homebrew">Github</a> but really all it boils down to is: <code>ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"</code>

2. **Install MacVim:**<br />And make sure it overrides the system default Vim, which is pre-7.3 Vim and sucks (or it was last week when my MacBook got here) use: <code>brew install macvim --override-system-vim</code>

3. **Install Tmux:**<br />Easy peesy lemon squeezy: <code>brew install tmux</code>

4. **Thank the good, sweet lord for Paul Hinze:**<br /> Install Paul&#8217;s reattach-to-user-namespace hack via homebrew: <code>brew install reattach-to-user-namespace --wrap-pbcopy-and-pbpaste</code>

5. **Append your <code>~/.tmux.conf</code> file**:<br />With this lovely gem: <code>set-option -g default-command "reattach-to-user-namespace -l zsh"</code> or you can use bash, I guess, I don&#8217;t know because I use ZSH. That should be a step somewhere&#8230;<code>chsh -s /bin/zsh</code>. Done.

Now if only OSX Mountain Lion possessed the awesome power of moving windows between workspaces using keyboard shortcuts. Someday&#8230; someday.

  
