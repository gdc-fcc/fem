# Blog Preview Card

My submission for the blog preview card challenge. See the [live demo](https://gdc-fcc.github.io/fem/blog-preview/).

![](https://github.com/gdc-fcc/fem/blob/main/blog-preview/assets/images/screenshot.png)

## Technologies used

- Vanilla css/html
- git/GitHub/gh-pages
- live-preview
- VIM

## What I've learned

Getting the responsive behavior right was the most challenging part. I ended up using a clamp for the font size and a calc in `max-width`.

```css
body{
  font-size: clamp(0.75rem, 3.82vw,1rem);
}

main {
  max-width: calc(100vw - 3.5em)
}
```

Learned a lot from this and using ems to avoid breakpoints.
