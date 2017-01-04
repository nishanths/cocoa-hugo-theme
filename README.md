# Cocoa

A consistent and responsive [Hugo](http://gohugo.io) [theme](https://github.com/spf13/hugoThemes/) with clean typography. The primary typefaces are Open Sans, Raleway, and Ubuntu Mono.

[__Demo__](http://themes.gohugo.io/theme/cocoa/)

See this [Imgur album](http://imgur.com/a/skabh) or the [`images/`](https://github.com/nishanths/cocoa-hugo-theme/tree/master/images) directory for screen shots!

#### Features

* Responsive
* Suited for blogging and personal webpages
* Disqus support
* Built-in 404 page
* Syntax highlighting, by [@andy4thehuynh](https://github.com/andy4thehuynh)
* [Gravatar](https://github.com/nishanths/cocoa-hugo-theme/pull/25) profile image, by [@remeh](https://github.com/remeh)
* RSS feed and icon, by [@mvrilo](https://github.com/mvrilo)
* [Cache busting](https://github.com/nishanths/cocoa-hugo-theme/commit/2e598e5b739c0529ba0d8ec305066ad209f4317f#diff-0bcd4f78d920797d1ae8c184a6554729R18)
* Google Analytics

Most features are optional and can be individually enabled/disabled in your [`config.toml`](https://github.com/nishanths/cocoa-hugo-theme/blob/master/exampleSite/config.toml).

<img src="http://i.imgur.com/jdstF9j.png" width="800">

## Table of Contents

* [Getting Started](#getting-started)
* [Usage](#usage)
* [Development](#development)
* [Changelog](#changelog)
* [License](#license)

## Getting Started 

From the root of your Hugo site, clone the theme into `themes/cocoa` by running:

````
git clone https://github.com/nishanths/cocoa-hugo-theme.git themes/cocoa
````

Then, generate your site's files by running:

````
hugo -t cocoa
````

Or serve the site and visit `localhost:1313` in your browser:

```
hugo -t cocoa --watch serve
```

## Usage

#### config.toml

Please see the sample [`config.toml`](https://github.com/nishanths/cocoa-hugo-theme/blob/master/exampleSite/config.toml). Note that if you already use cocoa but have updated to Hugo 0.18, you must lowercase every params of your existing `config.toml`. (like in the sample)

#### Creating posts

Posts should generally go under a `content/blog` directory. Typically you would run:

````
hugo new blog/your-new-post.md
````
For posts to appear on your site, you may need `draft = false` in the post's front matter or use the `--buildDrafts` option when building.

#### Creating fixed pages

Fixed pages such as an About page should preferably go under a `content/fixed` or be present at the root of the `content` directory.

````
$ hugo new fixed/about.md
````

#### Example site

An example site is available in `exampleSite/`.

## Development

Pull requests, bug fixes, and new features are welcome! If you're contributing CSS changes, please see [`dev/README.md`](dev/README.md).


## Changelog

See [Changelog](https://github.com/nishanths/cocoa-hugo-theme/wiki/Changelog) in the wiki.


## License

Licensed under the MIT License. See the [LICENSE](https://github.com/nishanths/cocoa-hugo-theme/blob/master/LICENSE) file for more details.
