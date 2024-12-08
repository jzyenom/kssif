/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        lift: "lift 1s ease-out forwards",
        crash: "crash 0.5s ease-in forwards",
        dust: "dust 1s ease-out forwards",
        float: "float 3s infinite",
      },
      keyframes: {
        lift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50px)" },
        },
        crash: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0)" },
        },
        dust: {
          "0%": { opacity: 0, transform: "scale(0)" },
          "50%": { opacity: 1, transform: "scale(1.5)" },
          "100%": { opacity: 0, transform: "scale(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(5px)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      colors: {
        // Shades of gray for neutral elements
        gray: {
          100: "#FBFBFB",
          200: "#c2c7ca",
          300: "#b8bcbf",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#121212",
          900: "#191919",
        },
        // Shades of red for alerts or errors
        red: {
          100: "#FFE5E5",
          200: "#FFB2B2",
          300: "#FF8080",
          400: "#FF4D4D",
          500: "#FF1A1A",
          600: "#E60000",
          700: "#B30000",
          800: "#800000",
          900: "#4D0000",
        },
        // Shades of blue for informational messages or accents
        blue: {
          100: "#E5F2FF",
          200: "#B2D8FF",
          300: "#80BEFF",
          400: "#4DA3FF",
          500: "#1A89FF",
          600: "#0073E6",
          700: "#005BB3",
          800: "#004280",
          900: "#00294D",
        },
        // Shades of yellow for warnings or highlights
        yellow: {
          100: "#FFF9E5",
          200: "#FFF2B2",
          300: "#FFEB80",
          400: "#FFE34D",
          500: "#FFDC1A",
          600: "#E6C700",
          700: "#B39C00",
          800: "#806F00",
          900: "#4D4300",
        },
        // Shades of green for success messages or confirmations
        green: {
          100: "#E5FFE5",
          200: "#B2FFB2",
          300: "#80FF80",
          400: "#4DFF4D",
          500: "#1AFF1A",
          600: "#00E600",
          700: "#00B300",
          800: "#008000",
          900: "#004D00",
        },
        // Shades of orange for vibrant elements or warnings
        orange: {
          100: "#FFF2E5",
          200: "#FFD8B2",
          300: "#FFBE80",
          400: "#FFA34D",
          500: "#FF891A",
          600: "#E67300",
          700: "#B35900",
          800: "#804000",
          900: "#4D2600",
        },
        // Shades of purple for creative or luxurious designs
        purple: {
          100: "#F4E5FF",
          200: "#E0B2FF",
          300: "#CC80FF",
          400: "#B74DFF",
          500: "#A31AFF",
          600: "#8900E6",
          700: "#6D00B3",
          800: "#510080",
          900: "#34004D",
        },
        // Shades of pink for playful or soft accents
        pink: {
          100: "#FFE5F2",
          200: "#FFB2D8",
          300: "#FF80BE",
          400: "#FF4DA3",
          500: "#FF1A89",
          600: "#E60073",
          700: "#B30059",
          800: "#800040",
          900: "#4D0026",
        },
        // Shades of gold for premium or special elements
        gold: {
          100: "#FFF8E5",
          200: "#FFECB2",
          300: "#FFE080",
          400: "#FFD34D",
          500: "#FFC61A",
          600: "#E6B000",
          700: "#B38900",
          800: "#806200",
          900: "#4D3B00",
        },
        // Shades of silver for subtle or elegant accents
        silver: {
          100: "#F8F8F8",
          200: "#E5E5E5",
          300: "#D2D2D2",
          400: "#BFBFBF",
          500: "#ACACAC",
          600: "#8C8C8C",
          700: "#6D6D6D",
          800: "#4E4E4E",
          900: "#2F2F2F",
        },
        // Shades of bronze
        bronze: {
          100: "#F9E6DA", // Light bronze for subtle highlights
          200: "#EAC8AF", // Softer bronze tone for backgrounds
          300: "#DBAB85", // Muted bronze for accents
          400: "#C88E5A", // Mid-tone bronze for decorative elements
          500: "#B3712F", // True bronze for strong accents
          600: "#8F591F", // Darker bronze for depth
          700: "#6B4215", // Deep bronze for contrast
          800: "#472B0B", // Very dark bronze for shadows
          900: "#251500", // Almost black bronze for outlines
        },
      },
    },
  },
  plugins: [],
};
