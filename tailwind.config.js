/** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist//*.{html,js}"],
  theme: {
    extend: {},
    keyframes: {
      textSwitch: {
        '0%, 100%': { content: '"Bold"', color: '#ff009d' },
        '40%': { content: '"Confident"', color: '#5b54c4' },
        '60%': { content: '"Funny"', color: '#50C878' },
        '80%': { content: '"Humorous"', color: 'white' },
        '100%': { content: '"Organized"', color: '#00ffb4' },
      }
    },
    animation: {
      textSwitch: 'textSwitch 3s infinite'
    }
  },
  keyframes: {
    animate: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-100%)" },
    },
    go: {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(100%)" },
    },
    },
    animation: {
      animate: "animate 10s linear infinite",
      go: "go 10s linear infinite",
    },
  
  plugins: [],
}