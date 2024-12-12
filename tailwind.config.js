/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url('/src/images/imagee.jpg')",
        "deep": "url('src/images/deep.png')",
      }
    },
  },
  plugins: [],
}

