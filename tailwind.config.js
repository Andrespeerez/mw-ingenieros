export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        panel: 'rgb(var(--color-panel))',
        text: 'rgb(var(--color-text))',
        textSoft: 'rgb(var(--color-text-soft))',
        border: 'rgb(var(--color-border))',
        mint: {
          50: 'rgb(var(--color-mint-50))',
          100: 'rgb(var(--color-mint-100))',
          200: 'rgb(var(--color-mint-200))',
          300: 'rgb(var(--color-mint-300))',
          400: 'rgb(var(--color-mint-400))',
          500: 'rgb(var(--color-mint-500))',
        },
        cyan: {
          500: 'rgb(var(--color-cyan-500))'
        },
        magenta: {
          500: 'rgb(var(--color-magenta-500))'
        },
        yellow: {
          500: 'rgb(var(--color-yellow-500))'
        },
        green: {
          500: 'rgb(var(--color-green-500))'
        }
      }
    }
  },
  plugins: []
}
