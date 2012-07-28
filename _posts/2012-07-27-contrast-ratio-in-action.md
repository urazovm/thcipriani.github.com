---
layout: blog_post
title: Website Contrast Ratio in Practce
---
On the [topic of color contrast](http://www.w3.org/TR/WCAG10-CSS-TECHS/#style-color-contrast 'CSS Techniques for Web Content Accessibility Guidelines 1.0') the W3C defines [Success Criterion 1.4.3](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html 'Success Criterion 1.4.3') saying:
>**Contrast (Minimum)**: The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: (Level AA)
>* **Large Text**: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
>* **Incidental**: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
>* **Logotypes**: Text that is part of a logo or brand name has no minimum contrast requirement.

There is a formula for calculating the contrast of two colors available at [the paciello group](http://www.paciellogroup.com/resources/contrast-analyser.html, 'Contrast Analyser')&mdash; they also have a Contrast Analyser that you can download for Mac and Windows.

Alternately, you could skip the download and the hand-cranking of numbers and enter your hex codes into the [Luminosity Colour Contrast Ratio Analyser](http://juicystudio.com/services/luminositycontrastratio.php, 'Luminosity Colour Contrast Ratio Analyser')

<hr>

**Looking at popular websites contrast**

The genesis of the exercise was to review websites I have built and my favorite foreground/background combinations so lets do that &hellip;

<hr>

**The text you're reading now**

It's pretty good right? The text you're reading I mean&mdash;easy to read, contrast-wise anyway.

* Text color: [#444444](http://www.colourlovers.com/color/444444)
* Background color: [#f8f8f8](http://www.colourlovers.com/color/F8F8F8)
* Contrast-ratio: 9.17:1 
* Analysis: Pretty amazing.

<hr>

**Apple's nav bar**

<img src="/images/Apple-nav-bar.png" alt="Apple's nav bar">

Apple's nav bar is a gradient, so this analysis is for the color at the lightest point of the gradient versus the text

* Text color:  [#FFFFFF](http://www.colourlovers.com/color/FFFFFF)
* Background color (again, at the lightest part of the gradient): [#727272](http://www.colourlovers.com/color/727272)
* Contrast-ratio: 4.81:1
* Analysis: Passed at Level AA for regular text, and pass at Level AAA for large text (18pt or 14pt bold)&mdash;Apple's nav text is SVG (ostensibly for the new retina displays), but it seems to be about 14pt bold. Good 'nuff.

<hr>

**Google's account settings bar**

<img src="/images/google-account-settings.png" alt="Google's account settings bar">

The Google account settings bar has always seemed to be fairly low-contrast to me&mdash;let's test a theory

* Text color:  [#666666](http://www.colourlovers.com/color/666666)
* Background color: [#F1F1F1](http://www.colourlovers.com/color/F1F1F1)
* Contrast-ratio: 5.08:1
* Analysis: Passed at Level AA for regular text, and pass at Level AAA for large text (18pt or 14pt bold)&mdash;better contrast than Apple; however, the text in this image above is 13px/27px Arial,sans-serif at the default font-weight which is close, but not quite ideal.

Out of curiousity I decided to see what these recommendations would look like for Google in practice&mdash;answer: not great (see below)

<img src="/images/google-account-settings_large.png" alt="Google's account settings bar—larger font">
