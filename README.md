# html-include-comment
Simply include text partials via html (css/js) comments like this &lt;!-- header.html -->

# Install
```shell
$ npm install html-include-comment
```

# Run
```shell
$ html-include-comment some/source.html some/dest.html
```

# Usage

In your sourcefile add html, css or js comments to render the
specified file content inline. The comments are getting replaced with
the file contents.

```html
<html>
  <head>
    <style>
      /* some/inline.css */
    </style>
  </head>
  <body>
    <!-- partials/header.html -->
    <!-- some/inline.svg -->
    <script>
      /* some/inline.js */
    </script>
  </body>
</html>
```

It works with both comment styles:
```html
<!-- some/file.html -->
```
and
```css
/* some/otherfile.css */
```

File type or extension does not matter (so it could be `/* foo/bar.baz */` as well – as long as the file contains text content.
