+++
date = "2015-08-25T17:09:14-05:00"
draft = false
title = "Use @ instead of HEAD"
slug = 'use-at-instead-of-head'

+++

I recently discovered that from git version [1.8.5](https://github.com/git/git/blob/master/Documentation/RelNotes/1.8.5.txt#L100) onwards, `@` can replace `HEAD`: 

```bash
$ git reset --hard @~2
$ git rebase -i @~10
$ git diff @~2..@~3
```

And also in most scenarios `HEAD` can be left out completely, so you can say:

```bash
$ git reset -- @{2}
```

instead of:

```bash
$ git reset -- HEAD@{2}
```

It takes some getting used to, but it's definitely faster than typing `HEAD`.
