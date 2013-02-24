---
layout: blog_post
title: Installing Vim from source on CentOS 6
---
…or, I suppose, other Linux-es…Linuxi…Linux distributions.

Many of the Vim features on which I&#8217;ve come to depend simply aren't available in Vim pre-7.3.3. That&#8217;s fine if I&#8217;m working on an OS that cares about having up-to-date software like Ubuntu or OSX; however, it ain&#8217;t so great if I&#8217;m working on a shared host that uses CentOS **_five point something dumb_** because the hosting-providers weren&#8217;t hugged as children (I&#8217;d guess).

## New OS, Old Repo

The only thing worse than working on an old OS, with an old version of Vim is working on a _new_ OS with an old version of Vim. I recently disovered that the yum-installable Vim (vim-enhanced) version on CentOS 6.3 is v.7.2.411—WTF CentOS? What&#8217;s your deal, guy?

**Some plugins that depend on version 7.3:**

- &shy;<a href="http://majutsushi.github.com/tagbar/" target="_blank">Tagbar</a>
- &shy;<a href="http://myusuf3.github.com/numbers.vim/" target="_blank">Numbers.vim</a>
- &shy;<a href="http://valloric.github.com/YouCompleteMe/" target="_blank">YouCompleteMe</a>

And, really, those are just the plugins that fail _loudly_ for me. Like the ones that vomit, &#8220;Hey, WTF, guy?&#8221; to stdout every rootin&#8217; tootin&#8217; time I fire up Vim. There would likely be other functionality that I&#8217;d loose by not using Vim 7.3.3+.

I don&#8217;t have to take this kind of guff from CentOS. No. I think that, instead, I&#8217;m going to do something awesome.

Compiling Vim from source means you don&#8217;t have to get pushed around by crummy distro repos and you look like a 1970s-era Fred Williams-level badass…so…bonus points…

## Retrieving Vim source
Vim keeps its source in a Mercurial repo on googlcode so you need to download it. To do that you should have Mercurial installed (which you can, somewhat ironically, install from via yum <code>yum install mercurial</code>). You should switch to the root user for this install and for your sanity so use <code>su</code> or <code>sudo bash</code>:

{% highlight bash linenos %}
$ sudo bash
$ cd /usr/local/src/
$ hg clone https://vim.googlecode.com/hg/ vim
$ cd vim
{% endhighlight %}

## Configuration options

There are quite a few configuration options (which you can view by running <code>./configure --help</code> in your newly created <code>vim</code> directory)—with respect to Vim installs I support going nuclear. Even at it&#8217;s most ginormous Vim will still be a small install relative to other IDEs—Vim is my primary editor and IDE, so I&#8217;m down to do it big. I&#8217;m also going to use the <code>/usr</code> prefix so that Vim is installed system-wide.


{% highlight bash linenos %}
$ ./configure --prefix=/usr --with-compiledby="Tyler the Compiler" --with-features=huge --enable-rubyinterp --enable-pythoninterp
{% endhighlight %}

## make && make install

Srsly, that&#8217;s it&#8212;

{% highlight bash linenos %}
make && make install
{% endhighlight %}

Congrats! You&#8217;re one bad mother Vim compiler. 

So… <code>which vim</code>? <code>/usr/bin/vim</code>. Boom. Yeah, that&#8217;s right.
