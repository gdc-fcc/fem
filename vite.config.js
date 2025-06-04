import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qrCode: resolve(__dirname, 'qr-code/index.html'),
        blogPreview: resolve(__dirname, 'blog-preview/index.html'),
        socialLinks: resolve(__dirname, 'social-links/index.html'),
        recipePage: resolve(__dirname, 'recipe-page/index.html'),
        productPreview: resolve(__dirname, 'product-preview/index.html'),
        fourCards: resolve(__dirname, 'four-cards/index.html'),
        testimonialsGrid: resolve(__dirname, 'testimonials-grid/index.html'),
        articlePreview: resolve(__dirname, 'article-preview/index.html'),
        newsletterSignup: resolve(__dirname, 'newsletter-signup/index.html'),
        timeTracker: resolve(__dirname, 'time-tracker/index.html'),
        tipCalculator: resolve(__dirname, 'tip-calculator/index.html'),
        starRating: resolve(__dirname, 'star-rating/index.html'),
      },
    },
  },
    plugins: [
    compression()
  ],
})