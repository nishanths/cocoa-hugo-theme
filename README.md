# Cocoa

A consistent and responsive [Hugo](http://gohugo.io) [theme](https://github.com/spf13/hugoThemes/) with clean typography. The primary typefaces are Open Sans, Raleway, and Ubuntu Mono.

[__Demo__](http://themes.gohugo.io/theme/cocoa/)

#### Features

```
* Responsive
* Suited for blogging and personal webpages
* Disqus support
* Built-in 404 page
* Syntax highlighting (by @andy4thehuynh)
* Gravatar/static profile image (by @remeh)
* RSS feed and icon (by @mvrilo)
* Optimized SVG icons (by @robinst)
* Cache busting
* Google Analytics
```

Most features are optional and can be individually enabled/disabled in your [`config.toml`](https://github.com/nishanths/cocoa-hugo-theme/blob/master/exampleSite/config.toml).

## Screenshots

<img src="https://raw.githubusercontent.com/nishanths/cocoa-hugo-theme/master/images/tn.png" width="800">

<img src="http://i.imgur.com/jdstF9j.png" width="800">

<img src="https://i.imgur.com/5jI8kEU.png" width="400">


## Table of Contents

* [Quick start](#quick-start)
* [Usage](#usage)
* [Development](#development)
* [Changelog](#changelog)
* [License](#license)

## Quick start 

From the root of your Hugo site, clone the theme into `themes/cocoa` by running:

```sh
# Clone theme into the themes/cocoa directory
$ git clone https://github.com/nishanths/cocoa-hugo-theme.git themes/cocoa

# Generate site files into the public directory
$ hugo -t cocoa

# Or, serve your site and visit localhost:1313 in your browser
$ hugo -t cocoa --watch serve
```

## Usage

#### config.toml

Please see the sample [`config.toml`](https://github.com/nishanths/cocoa-hugo-theme/blob/master/exampleSite/config.toml). Note that if you already use cocoa but have updated to Hugo 0.18, you must lowercase every params of your existing `config.toml` (like in the sample).

#### Creating posts

Posts should generally go under a `content/blog` directory. Typically you would run:

````
hugo new blog/your-new-post.md
````
For posts to appear on your site, you may need `draft = false` in the post's front matter or use the `--buildDrafts` option when building.

#### Creating fixed pages

Fixed pages such as an About page should preferably go under `content/fixed` or be present at the root of the `content` directory.

````
hugo new fixed/about.md
````

## Development

This theme is built and improved upon by open source [contributions](https://github.com/nishanths/cocoa-hugo-theme/graphs/contributors). Pull requests, bug fixes, and new features are welcome! 

If you're contributing CSS changes, please see the README at [`dev/`](dev).


## Changelog

See [Changelog](https://github.com/nishanths/cocoa-hugo-theme/wiki/Changelog) in the wiki.


## License

Licensed under the MIT License. See the [LICENSE](https://github.com/nishanths/cocoa-hugo-theme/blob/master/LICENSE) file for more details.
