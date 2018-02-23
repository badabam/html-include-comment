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
&lt;html>
  &lt;head>
    &lt;style>
      /* some/inline.css */
    &lt;/style>
  &lt;/head>
  &lt;body>
    &lt;!-- partials/header.html -->
    &lt;!-- some/inline.svg -->
    &lt;script>
      /* some/inline.js */
    &lt;/script>
  &lt;/body>
&lt;/html>
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
