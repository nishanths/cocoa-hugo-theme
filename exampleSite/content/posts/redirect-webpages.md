+++
date = "2015-08-22T15:45:30-07:00"
draft = false
title = "Redirect webpages using HTML"
slug = "redirect-webpages-html"

+++

Webpage redirection is great for automatically redirecting people visiting an old URL to a new URL where the content has moved to. It can be done using JavaScript, but there is also a convenient HTML-only solution.

To redirect visitors reaching `yourwebsite.com/blog` to `yourwebsite.com/posts`, add this to the `<head>` section of the HTML at `yourwebsite.com/blog`:

{{< highlight html "linenos=inline" >}}
<meta http-equiv="refresh" content="0;url='/posts'" />
<link rel="canonical" href="/posts" />
{{</highlight>}}

### walkthrough

Setting `http-equiv="refresh"` in the first line performs the actual redirect. The number in the `content` attribute specified in seconds tells the browser how long to wait before redirecting. In this example, `0` redirects immediately. Increasing the wait may be useful for briefly displaying a 404 page before automatically switching to the home page. The `url` specfies the destination for the redirect. In this example, we wanted to switch to `/posts`.

The second line is optional; it helps search engines know which the preferred version of the page is. Usually, this is the redirect destination.
