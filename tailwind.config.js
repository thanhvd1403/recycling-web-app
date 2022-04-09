module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      gridTemplateColumns: {
        "80/20": "80% 20%",
        fixed: "40px 260px",
      },
      screens: {
        sx: { max: "639px" },
        // sm: "640px",
        // // => @media (min-width: 640px) { ... }
        // md: "768px",
        // // => @media (min-width: 768px) { ... }
        // lg: "1024px",
        // // => @media (min-width: 1024px) { ... }
        // xl: "1280px",
        // // => @media (min-width: 1280px) { ... }
        // "2xl": "1536px",
        // // => @media (min-width: 1536px) { ... }

        mobile: "640px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        //
      },
    },
  },
};
