This directory contains files that are purely used in development. 

The theme should continue to work even if this directory is removed.

## Getting started

To make CSS changes:

```sh
$ npm install -g less          # install less compiler
$ vim dev/less/main.less       # make changes
$ make css                     # compile
```

Commit both `dev/less` and `static/css`.

## Files

```
less/
  - reset.less              # usual CSS reset
  - pygments.less           # syntax highlighting
  - main.less               # main file that @includes files below
  - site.less               # core styles
  - markdown.less           # styles for markdown-rendered content
  - util.less
  - flexbox-prefixes.less
```

## Versions in use

```
$ lessc
lessc 2.7.1 (Less Compiler) [JavaScript]
```
