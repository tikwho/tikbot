/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  safelist: [
    // 动态颜色类
    'bg-blue-100', 'text-blue-600', 'bg-blue-600',
    'bg-green-100', 'text-green-600', 'bg-green-600',
    'bg-yellow-100', 'text-yellow-600', 'bg-yellow-600',
    'bg-purple-100', 'text-purple-600', 'bg-purple-600',
    'bg-indigo-100', 'text-indigo-600', 'bg-indigo-600',
    'bg-emerald-100', 'text-emerald-600', 'bg-emerald-600',
  ],
}