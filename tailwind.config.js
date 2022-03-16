module.exports = {
  mode:"jit",
  content: [],
  purge:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
        center:true,
      },
      colors:{
        light_black:"#555555",
        main_hover:"#8e44ad",
        light_white:"#fff9",
        black_alt:"#777",
        light_bg:"#eee"
      },
    },
  },
  plugins: [],
}
