---
layout: blog_post
title: Using Amazon Product Advertising API to Grab Album Art
---

At Custom Channels we have our own API for Album Art. Our Album Art API was designed
before I got here, it was designed for the single use-case of the Custom Channels standard flash player 
(i.e. 125×125 gif) and isn't what you'd call “future proof”. 

**ANYWAY**, we're revisiting some of the Custom Channels' site design and
one idea I had is to show a handful of recently played albums from a few channels
on our homepage. And a 125×125 gif ain't gonna to cut the mustard!

This brings us to the topic of this post—**the Amazon Product Advertising API**—Step-by-Step.

This assumes you've already got a development environment that runs PHP5.

* The first thing to do, if you haven't already, is to [register](http://aws.amazon.com/ "AWS Register") for Amazon Web Services
* After you've registered for a AWS account, login to your account and go to the “My Account/Console” pulldown at the top and 
click, “Security Credentials”
* Scroll down to “Access Credentials”<br><img class="blogImg" src="/images/access_credentials.png" alt="Access Credentials">
* Copy your "Access Key ID", click "Show" and copy your "Secret Access Key"
* Go ahead and clone the [Amazon ECS PHP Library](https://github.com/Exeu/Amazon-ECS-PHP-Library "Amazon ECS PHP Library") to your development environment{% highlight bash %}$ git clone https://github.com/Exeu/Amazon-ECS-PHP-Library.git{% endhighlight %}
* You'll only be using the file <code>lib/AmazonECS.class.php</code> so copy that wherever you'd like
* Once you've got that file it's easy-peasy-lemon-squeezy:
<script src="https://gist.github.com/3364600.js?file=amazon-album-art.php"> </script>
The code above will take the argument from the “track” url parameter and 
search Amazon's digital music store and output the large-format album art for the top match.
