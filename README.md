# Cocoa

A consistent and responsive [Hugo](http://gohugo.io) [theme](https://github.com/spf13/hugoThemes/) with clean typograhy.

[__Demo__](http://themes.gohugo.io/theme/cocoa/)

#### Features

* Responsive
* Suited for blogging and personal webpages
* Disqus support
* Built-in support for 404 pages
* Syntax highlighting

<img src="http://i.imgur.com/jdstF9j.png" width="800">

# Table of Contents

* [Getting Started](#getting-started)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Changelog](#changelog)
* [Contributing](#contributing)
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

## Usage

#### Creating Content

* Posts should generally go under a `content/blog` directory. Typically you would run:

````
hugo new blog/your-new-post.md
````

(You may need to set `draft = false` in the new post's front matter for it to appear on your site.)

* Fixed pages such as an About page should preferably go under a `content/fixed` or be present at the root of the `contents` directory.

````
$ hugo new fixed/about.md
````

#### config.toml

Please see the sample [`config.toml`](https://github.com/nishanths/cocoa-hugo-theme/blob/master/exampleSite/config.toml) in `exampleSite/`.

#### Example site

An example site is available in `exampleSite/`.

## Screenshots

See this [Imgur album](http://imgur.com/a/skabh) or the [`images/`](https://github.com/nishanths/cocoa-hugo-theme/tree/master/images) directory!

## Changelog

> v0.3.0

- Change color from orange to blue; improve colors elsewhere
- Change `div.section` to `section`
- Rename  `posts` directory to `blog`
- Add ability to specify extra CSS files in `config.toml`
- Removed `WebFontsFile` feature from `config.toml`
- Remove the initials displayed on top right of single post pages
- Update example site

> v0.2.0

* Added Disqus support. To enable Disqus, add `disqusShortname = "XYZ"` to `config.toml`. More details: <http://gohugo.io/extras/comments/>.
* In the posts list, replaced date with bullets at smaller screen widths.

> v0.1.0

* Initial release

## Contributing

Pull requests, bug fixes, and new features are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request on GitHub

## License

Licensed under the MIT License. See the [LICENSE](https://github.com/nishanths/cocoa-hugo-theme/blob/master/LICENSE.md) file for more details.
