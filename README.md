# Cocoa

A responsive [Hugo][1] [theme][2]. The typefaces in the theme are
Open Sans, Raleway, and Ubuntu Mono.

## Usage

To install the theme and build your site using the theme, run the
following commands from the root of your Hugo project.

    $ git clone https://github.com/nishanths/cocoa-hugo-theme.git themes/cocoa
    $ hugo -t cocoa

Configuration:

See the sample config.toml file in exampleSite/config.toml.  Most
features are optional and can be individually enabled or disabled
in config.toml.

If you already use Cocoa and have updated to Hugo 0.18, you must
lowercase the "params" key names in your existing config.toml (like
in the sample file).

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
