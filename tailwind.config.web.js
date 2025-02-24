/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './web/**/*.html',      	// فقط فایل‌های وب
    './web/assets/js/**/*.js'
    ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          900: "var(--primary-900)",
          900: "var(--primary-900)",
          50: "var(--primary-50)",
          10: "var(--primary-10)",
        }
      }
    },
  },
  plugins: [],
}
