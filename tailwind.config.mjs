export default {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};