# html-include-comment
Simply include html partials via html comments like this &lt;!-- header.html -->

# Install
`$ npm install html-include-comment`

# Usage
`$ html-include-comment some/source.html some/dest.html`

# Patterns

It works with both comment styles: 
```html
<!-- some/file.html -->
``` 
and
```css
/* some/otherfile.css */
```

File type or extension does not matter (so it could be `/* foo/bar.baz */` as well – as long as the file contains text content.
