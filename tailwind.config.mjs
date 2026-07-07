// @ts-nocheck
/** @type {import('tailwindcss').Config} */
import config from "ssg-theme-astro/tailwind"
export default {
  ...config,
  theme: {
    ...config.theme,
    extend: {
      ...config.theme?.extend,
    },
  },
  plugins: [...(config.plugins || [])],
}