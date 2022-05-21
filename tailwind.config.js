module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'login' : "url('/assets/login.jpg')",
      }
    },
  },
  plugins: [],
}