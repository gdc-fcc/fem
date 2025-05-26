# Blog Preview Card

Draft for my submission for the blog preview card challenge. See the [live demo](https://gdc-fcc.github.io/fem/blog-preview/).

![](https://github.com/gdc-fcc/fem/blob/main/blog-preview/assets/images/screenshot.png)

## TODO

Part of the challenge is some responsive behavior. In the mobile layout, the image is cropped left and right and the font size is reduced. This should ideally be done without media queries, so probably something like this

```css
p { font-size: min(3.2vw, 16px); }
```
