# Developer Documentation

This directory contains files that are purely used in development.

The theme should continue to work even if this directory is removed.

## Getting Started

Install Less (version 2.7.*)

```sh
npm install -g less
```

After editing the .less files, run Make

```sh
make css
```

Commit both `dev/less` and `static/css`.

## Files

|File                 | Description                          |
|---                  |---                                   |
|reset.less           | CSS reset script                     |
|pygments.less        | Syntax highlighting                  |
|main.less            | Main file that @includes files below |
|site.less            | Core styles                          |
|markdown.less        | Styles for rendered Markdown content |
|util.less            |                                      |
|flexbox-prefixes.less|                                      |