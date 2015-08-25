# Cocoa

A [Hugo](http://gohugo.io) theme with clear typograhy for easy, disturbance-free reading.

<br />

<img src="https://raw.githubusercontent.com/nishanths/cooca-hugo-theme/master/images/tn.png" width="500px">

<br />

# Table of Contents

* [Setup](#setup)
* [Theme](#theme)
* [Screenshots](#screenshots)
* [Extras](#extras)
* [Example Sites](#example-sites)
* [Contributing](#contributing)
* [License](#license)

# Setup 

From the root of your Hugo site, clone the theme into a folder named `cocoa` by running:

````
$ mkdir themes
$ cd themes
$ git clone https://github.com/nishanths/cocoa-hugo-theme cocoa
````

Then, generate static files by running:

````
hugo -t cocoa
````

# Theme

## Creating Content

* Posts should go under a `content/posts` directory. Typically you would run:

````
$ hugo new posts/newpost.md
````

* Fixed pages such as an About page should preferably go under a `content/fixed` or be present at the root of the `contents` directory.

````
$ hugo new fixed/about.md
````

## Fonts and Colors

The primary font face is Proxima Nova. You will need to place your own copy of the font under ``. The monospace font face is Ubuntu Mono from Google Fonts. 


The main colors are 

* `#333333`
* `#b7b7b7`
* `#21bb5b`

For syntax highlighting, set `pygmentsuseclasses = true` in your `config.toml`. Syntax highlighting classes in `css/pygments.css` are from [`default.css`](https://github.com/richleland/pygments-css/blob/master/default.css).

## Site Variables

* Add the following params in `config.toml` to customize your site. 
  * The only required key is `DateForm`.

````toml
[params]
Author = "Firstname Lastname"
DateForm = "Jan 2, 2006" # required
Description = "eat, sleep, rave, repeat"
Email = "username@hogwarts.edu"
Facebook = "//facebook.com/username"
FaviconFile = "myicon.ico" # relative to img/ directory, defaults to themes/cocoa/img/favicon.ico
GATracker = "<Google-Analytics-ID>"
GitHub = "//github.com/username"
Lang = "en" # <body lang="en">
LinkedIn = "//linkedin.com/in/username"
Twitter = "//twitter.com/username"
````

# Extras

## Less files

The `.less` files used to generate `main.css` are available at the root of the repository. Running:

````
$ lessc main.less static/css/main.css
````

should do the trick.


# Screenshots

###### single post

<img src="https://raw.githubusercontent.com/nishanths/cooca-hugo-theme/master/images/screenshot.png" width="700px">


# Example Sites

* [http://nishanths.me](http://nishanths.me) • [source](https://github.com/nishanths/)
* [Add yours](https://github.com/nishanths/cooca-hugo-theme/compare)

# Contributing

Pull requests are welcome!

# License

Licensed under the MIT License. See the [LICENSE](https://github.com/nishanths/cocoa-hugo-theme/blob/master/LICENSE.md) file for more details.