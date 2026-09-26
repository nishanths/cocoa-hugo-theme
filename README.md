# Cocoa

A responsive [Hugo][1] [theme][2]. The typefaces in the theme are
Open Sans, Raleway, and Ubuntu Mono.

## Features

* Responsive
* Suited for blogging and personal websites
* Disqus support
* Built-in 404 page
* Syntax highlighting with highlightjs (by @andy4thehuynh)
* Gravatar/static profile image (by @remeh)
* RSS feed and icon (by @mvrilo)
* Optimized SVG icons (by @robinst) for Instagram, 500px, and more
* Cache busting
* Google Analytics
* Piwik and Gitalk support

Most features are optional and can be individually enabled or
disabled in config.toml.

## Usage

Run these commands from the root of your Hugo project:

    $ git clone https://github.com/nishanths/cocoa-hugo-theme.git themes/cocoa
    $ hugo -t cocoa

Configuration:

See the sample config.toml file in exampleSite/config.toml.  If you
already use Cocoa and have updated to Hugo 0.18, you must lowercase
the "params" key names in your existing config.toml (like in the
sample file).

Creating posts:

Posts should generally be placed under a "content/blog" directory.
For example:

    $ hugo new blog/your-new-post.md

## License

See the LICENSE file.

Content under the "static" directory may be subject to the terms
of their original licenses.

Icons from the Ionicons project are MIT-licensed.

[1]: https://gohugo.io
[2]: https://github.com/spf13/hugoThemes/
