import { defineConfig } from 'vite'

export default defineConfig({
  base: "/gcs-handson/",
  test: {
    globals: true,
    environment: 'jsdom',
  },
})