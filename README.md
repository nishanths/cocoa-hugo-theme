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

From the root of your Hugo site, clone the theme into `themes/cocoa` by running:

````
$ mkdir themes
$ cd themes
$ git clone https://github.com/nishanths/cocoa-hugo-theme.git cocoa
````

Then, generate static files by running:

````
$ hugo -t cocoa
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

The primary font face is Proxima Nova in 400 and 700 weights. If you own the font, create a font face declarations like in the example below, and place it in the path specified in [`.Site.Params.WebfontsFile`](#site-variables):

````css
@font-face {
	font-family: 'ProximaNova';
	font-weight: normal;
	font-style: normal;
	src: url('webfonts/2F00B2_0_0.eot');
	src: url('webfonts/2F00B2_0_0.eot?#iefix') format('embedded-opentype'),
	     url('webfonts/2F00B2_0_0.woff2') format('woff2'),
	     url('webfonts/2F00B2_0_0.woff') format('woff'),
	     url('webfonts/2F00B2_0_0.ttf') format('truetype');
}
  
@font-face {
	font-family: 'ProximaNova';
	font-weight: bold;
	font-style: normal;
	src: url('webfonts/2F00B2_1_0.eot');
	src: url('webfonts/2F00B2_1_0.eot?#iefix') format('embedded-opentype'),
		  url('webfonts/2F00B2_1_0.woff2') format('woff2'),
		  url('webfonts/2F00B2_1_0.woff') format('woff'),
		  url('webfonts/2F00B2_1_0.ttf') format('truetype');
}
 
````

If you do not provide Proxima Nova files, the fallback font face—Source Sans Pro—will be automatically used from Google Fonts. The primary monospace font face is Ubuntu Mono from Google Fonts.


The main colors are:

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
FaviconFile = "img/myicon.ico" # relative to static/ directory, defaults to the icon at themes/cocoa/img/favicon.ico
GATracker = "<Google-Analytics-ID>"
GitHub = "//github.com/username"
Lang = "en" # <body lang="en">
LinkedIn = "//linkedin.com/in/username"
Twitter = "//twitter.com/username"
WebfontsFile = "css/mywebfontsfile.css" # relative to static/ directory, defaults to empty string 
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
* [Add yours by submitting a pull request](https://github.com/nishanths/nishanths.me/pulls)

# Contributing

Pull requests are welcome!

# License

Licensed under the MIT License. See the [LICENSE](https://github.com/nishanths/cocoa-hugo-theme/blob/master/LICENSE.md) file for more details.
