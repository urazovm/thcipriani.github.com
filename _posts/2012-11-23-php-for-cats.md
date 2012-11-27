---
layout: blog_post
title: PHP For Cats
---
<h2>An introduction to PHP for new programmers</h2>
<strong>So easy your human companion could do it too!</strong> 

After reading the wonderful
&#8220;<a href="http://jsforcats.com/" target="_blank">JavaScript For Cats</a>&#8221;
I thought it would be a pretty neat idea to blatantly rip-off the idea for PHP.

<h2>What&#8217;sa Php? Also, Meow</h2>

PHP (that&#8217;s pee-aitch-pee-meow) is a widely-used and somewhat quirky 
general-purpose scripting language that is especially suited for Web 
development and can be embedded into HTML.

PHP is one of the most popular server-side languages on the trip-dub 
(that&#8217;s street-talk for World Wide Web, home slice) and most shared-hosting 
accounts come with (a horribly out-of-date version of) PHP pre-installed.

This introduction will concentrate on some fun and easy things to do with PHP 
on your local machine.

<hr>

<h2>Table of Contents</h2>
 * &shy;<a href="#haters">A note on haters</a>
 * &shy;<a href="#installation">A note on installation</a>
 * &shy;<a href="#terminal">Meet your terminal</a>
 * &shy;<a href="#types">Strings</a>
 * &shy;<a href="#functions">Blocks</a>
 * &shy;<a href="#arrays">Arrays</a>
 * &shy;<a href="#loops">Loops</a>
 * &shy;<a href="#classes">Classes</a>
 * &shy;<a href="#more">More? Give me a break!</a>

<hr>

<h2 id="haters">A note on haters</h2>
<a href="http://knowyourmeme.com/memes/haters-gonna-hate" target="_blank">
    <strong>They&#8217;onna hate.</strong>
</a>

<img class="blogImg" src="/images/blog/hater+cat.jpg" alt="Haters gonna hate" />

Don&#8217;t hate the language. Hate the game. Or don&#8217;t hate anything,
that&#8217;s what Jesus would&#8217;ve done.

**_PHP is poorly designed_**. **_PHP is the most popular server-side language_**. 
These are the rare insights that spring-forth like pieces of mogwai on post-
midnight pizza binges, oozing their shiny knowledge juices so that all the world 
may truly know that the egoists who enjoy these arguments are not very fun 
at parties.

Yes&#8212;it&#8217;s true! I admit it! PHP is a language with problems. 
Comparison operations are slippery (<code>"01234" == "1234"</code> is true 
and <code>"09223372036854775808" == "9223372036854775808"</code> is false), 
I&#8217;ve received the error message &#8220;<code>T_PAAMAYIM_NEKUDOTAYIM</code>&#8221; 
on more than one occasion and the configuration system is both oblique and 
confusing. I really would like a GUI for my INI (yes, that&#8217;s correct, 
a _gooey_ for my _innie_&#8212;feel free to use that joke at parties).

There is, however, new hope for PHP developers. With all of the modern 
frameworks being released and a language core that is continually improving
(with the recent release of PHP 5.4) there is every reason to 
believe that there will soon be a resurgence of enthusiasm for PHP.

If people tell you not to learn PHP, you tell them not to learn their ABCs.
Not learning something because it&#8217;s not the best thing to learn implies 
that a human&#8217;s capacity for knowledge is a zero-sum game. 
Not learning PHP because it&#8217;s not the last thing you&#8217;ll ever 
have to learn is the sort of argument that a four year-old would mount against 
addition. Are you a four year-old, or a programmer? Well 
you&#8217;re a programmer now! Finally, how are you ever going to get 
into a banal argument about programming-language architecture if you 
don&#8217;t learn PHP, like, _right_ _now_?

The one thing that PHP is missing that Ruby, Python and even Javascript have 
is a community that is excited and empowered. How do you build that community? 
You create a large pool of easily-accessible, high-quality information. You 
create something like &#8220;<a href="http://jsforcats.com/" target="_blank">Javascript for
Cats</a>&#8221; but for PHP&#8230;oh right&#8230;

<hr>

<h2 id="installation">A note on installation</h2>
<strong>It can be a pain in the litter-box area</strong>

Installing PHP can, sometimes \*cough\*if you&#8217;re on Windows\*cough\* be 
a bit of a hassle. 

If you do have trouble&#8212;**DON&#8217;T LET INSTALLATION DISCOURAGE YOU!** 
It&#8217;s the biggest (and often most challenging) step to learning PHP.

<strong>Install options</strong>
 * For Macs:
   * Done. You&#8217;ve got some version of PHP installed.
   * You can also install <a href="http://www.mamp.info/en/index.html" target="_blank">MAMP</a>
     (read: Mac, Apache web server, MySQL database server and PHP) if you want a full stack 
     which you probably do.
 * Linux: Follow the guide for your distribution at <a href="http://library.linode.com/lamp-guides" target="_blank">linode</a>
 * Windows: Not too sure, but probably start with <a href="http://www.wampserver.com/en/" target="_blank">WAMP</a> (Windows, Apache, MySQL and PHP)

<hr>

<h2 id="terminal">Meet your terminal</h2>
<strong>It&#8217;s the you&#8217;s meow&#8230;assuming you are a cat</strong>

<img class="blogImg" src="/images/blog/terminal.png" alt="Terminal with XDebug" />

Opening a terminal, shell or command-line/powershell shouldn&#8217;t 
be too difficult. If it is, then this blog-post isn&#8217;t the best use of 
your time, try Zed Shaw&#8217;s 
<a href="http://cli.learncodethehardway.org/book/" target="_blank">command-line crash course</a> 
instead. Go ahead. I&#8217;ll wait here. Well, bookmark it then&#8230;

<strong>Open a terminal</strong>
 * Mac
   * Go to your applications folder and click on &#8220;Terminal&#8221;
 * Linux 
   * Look around your window system for something called &#8220;Shell&#8221; 
     or &#8220;Terminal&#8221;
 * Windows
   * Hit ctrl+r
   * Type &#8220;<code>cmd</code>&#8221;

Welcome to the terminal! Hope you had a plesant time working in a GUI, you&#8217;ll
never need it again.

<hr>

I&#8217;m making the assumption that you have the following:
 * Knowledge of Linux
 * &shy;<a href="http://library.linode.com/lamp-guides/ubuntu-12.04-precise-pangolin" target="_blank">
     A local development environment
   </a>
 * git-core installed both locally and on your webserver
 * rsync installed both locally and on your webserver
 * &shy;<a href="http://www.commandlinefu.com/commands/view/771/copy-your-ssh-public-key-on-a-remote-machine-for-passwordless-login-the-easy-way" target="_blank">
     Keyless SSH access to your webserver
   </a>
 
I&#8217;m using Ubuntu 12.04 locally, but I&#8217;d assume that most of this 
won&#8217;t be too different on a different distribution or on a Mac&#8212;but 
I&#8217;m probably totally wrong about that &#9786;

<hr>

<h2>Step One:</h2>
<strong>RSync your site to your local development environment.</strong> 

In order to begin to develop locally (and break the old <a href="http://www.bnj.com/cowboy-coding-pink-sombrero/" target="_blank">cowboy-coding</a> habits
that you&#8217;ve undoubtedly developed over the years) you need a local 
copy of your site.

 1. Open your terminal emulator and <code>cd</code> to the directory in which
    you will be storing these files (i.e. <code>cd /srv&shy;/www&shy;/tylercipriani.com&shy;/public_html</code>)
 2. Rsync the <code>htdocs</code> or <code>public_html</code> from your webserver
    into this local directory:

{% highlight bash linenos %}
$ rsync -av -e "ssh -p <port>" <rsync-username>@<webserver>:/path/to/htdocs/ .
{% endhighlight %}

    The command breaks down like this:
     * &shy;<code>a</code> means &#8220;Archive&#8221;&#8212;keeps permissions, mtimes, etc the same
     * &shy;<code>v</code> means &#8220;Verbose&#8221;&#8212;increases verbosity of the command
     * &shy;<code>e</code> means &#8220;RSH&#8221;&#8212;allows you to use remote shell (same as RSH=command)
     * &shy;<code>:/path/to/htdocs/</code>&#8212;the path to you htdocs folder. 
       The trailing <code>/</code> is significant&#8212;it means copy the 
       content of the htdocs directory rather than the directory by name
     * &shy;<code>.</code> is the current directory

<hr>

<h2>Step Two:</h2>
<strong>Initialize git in local development environment.</strong> 

This step will create a new git repository on your local machine and add all
the code that you&#8217;ve rsynced in the previous step to that repo.

 1. &shy;<code>cd</code> to the directory to which you previously rsynced 
    your site and initialize a git repository by running <code>git init</code>

    <pre class="prettyprint">
    cd /srv/www/tylercipriani.com/public_html/
    git init
    </pre>
 2. Add the contents of the current directory to the git repository by running 
    <code>git add .</code>
 3. Commit all your newly added files to the repo by running your first 
    commit <code>git commit -m &#8220;First Commit&#8221;</code>

<hr>

<h2>Step Three:</h2>
<strong>Setup a bare repo on your web server.</strong> 

You need a bare repo out on your webserver that will act as a mirror to your 
local development environment.

 1. ssh into your webserver and make a new directory, I usually make it above 
    the webroot (i.e. <code>htdocs</code>)
    
    <pre class="prettyprint">
    mkdir tylercipriani.com.git &amp;&amp; cd tylercipriani.com.git
    </pre>

 2. Once inside the new directory initialize a bare repository by using the 
    <code>--bare</code> flag:

    <pre class="prettyprint">
    git init --bare
    </pre>

 3. Now we can define a new post-receive hook that will be triggered whenever 
    an update is pushed to this new bare repository. The post-receive hook 
    can be any type of script you want, the script below is written in bash. 
    <code>cd</code> into the <code>.git/hooks</code> directory and create a 
    file called &#8220;post-receive&#8221;. Copy the code below into the file:

    <pre class="prettyprint">
    #!/bin/bash
    GIT_WORK_TREE=&lt;/path/to/your/htdocs/direcotry&gt; git checkout -f
    </pre>

    make sure that this code is executable by running 
    <code>chmod +x .git/hooks/post-receive</code>

<hr>

<h2>You&#8217;re Done!</h2>
<strong>Push to your new repo, you beautiful command-line ninja, you!</strong> 

Back on your local machine, in the webroot of your local development environment, 
add your bare webserver repo as your <code>remote</code> and push your git 
repo up to your server. The post-receive hook will take care of the rest!

<pre class="prettyprint">
git remote add web ssh://user@tylercipriani.com/home/user/tylercipriani.com.git
git push -u origin master
</pre>

By using the <code>-u</code> flag you&#8217;re setting the upstream which means 
you can just run <code>git pull</code> without further arguments to merge 
origin and master.
