# Cocoa

A consistent [Hugo](http://gohugo.io) [theme](https://github.com/spf13/hugoThemes/) with clear typograhy and colors.

![](http://i.imgur.com/AJVyzJd.png)

# Table of Contents

* [Getting Started](#getting-started)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Contributing](#contributing)
* [License](#license)

# Getting Started 

From the root of your Hugo site, clone the theme into `themes/cocoa` by running:

````
git clone https://github.com/nishanths/cocoa-hugo-theme.git themes/cocoa
````

Then, generate your site's files by running:

````
hugo -t cocoa
````

# Usage

This section describes how to create content that works well with this theme.

## Example site

An example site is available under the `exampleSite/` directory. 

## Creating Content

* Posts should go under a `content/posts` directory. Typically you would run:

````
hugo new posts/new-post.md
````

* Fixed pages such as an About page should preferably go under a `content/fixed` or be present at the root of the `contents` directory.

````
$ hugo new fixed/about.md
````

## Site variables

Please see the sample [`config.toml`](https://github.com/nishanths/cocoa-hugo-theme/blob/master/exampleSite/config.toml) under the `exampleSite/` directory. 


# Screenshots

**Posts index (small screens)**

![](http://i.imgur.com/CXVUZvj.png)

**About page (small screens)**

![](http://i.imgur.com/oLABRtU.png)

**About page (large screens)**

![](http://i.imgur.com/Srt8x7c.png)

**Single post (large screens)**

![](http://i.imgur.com/AJVyzJd.png)

# Contributing

Pull requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request on GitHub

# License

Licensed under the MIT License. See the [LICENSE](https://github.com/nishanths/cocoa-hugo-theme/blob/master/LICENSE.md) file for more details.
