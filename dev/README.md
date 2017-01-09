This directory contains files that are purely used in development. 

The theme should continue to work even if this directory is removed.

### Getting started

To make CSS changes:

```sh
# Install the less compiler
$ npm install -g lessc

# Make changes to .less files...
$ vim dev/site.less

# Compile dev/*.less files to static/css/*.css
$ make css
```

Commit both `dev/less` and `static/css`.

### Versions in use

```
lessc 2.7.1 (Less Compiler) [JavaScript]
```
