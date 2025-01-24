/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#4caf50"
      },
      borderRadius: {
        "custom-glass": "26px 26px 0 0"
      },
      backgroundColor: {
        "glass-light": "rgba(255, 255, 255, 0.07)"
      },
      boxShadow: {
        "custom-glass": "0px -19px 47px 0px rgba(0, 0, 0, 0.06)"
      }
    }
  },
  plugins: []
};
