/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables dark mode with .dark class
  theme: {
    extend: {
      colors: {
        success: {
          100: "#49de50",
          200: "#42c748",
        },
        destructive: {
          100: "#f75353",
          200: "#c44141",
        },
        primary: {
          100: "#dddfff",
          200: "#cac5fe",
        },
        light: {
          100: "#d6e0ff",
          400: "#6870a6",
          600: "#4f557d",
          800: "#24273a",
        },
        dark: {
          100: "#020408",
          200: "#27282f",
          300: "#242633",
        },
      },
      fontFamily: {
        "mona-sans": ['"Mona Sans"', "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.625rem",
        sm: "calc(0.625rem - 4px)",
        md: "calc(0.625rem - 2px)",
        lg: "0.625rem",
        xl: "calc(0.625rem + 4px)",
      },
      backgroundImage: {
        pattern: 'url("/pattern.png")',
        "dark-gradient": "linear-gradient(to bottom, #1A1C20, #08090D)",
        "border-gradient": "linear-gradient(to bottom, #4B4D4F, #4B4D4F33)",
        "blue-gradient-dark": "linear-gradient(to bottom, #171532, #08090D)",
        "blue-gradient": "linear-gradient(to left, #FFFFFF, #CAC5FE)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, addBase, addComponents }) {
      addUtilities({
        // Custom utilities
        ".flex-center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },
        ".dark-gradient": {
          background: "linear-gradient(to bottom, #1A1C20, #08090D)",
        },
        ".border-gradient": {
          background: "linear-gradient(to bottom, #4B4D4F, #4B4D4F33)",
        },
        ".blue-gradient-dark": {
          background: "linear-gradient(to bottom, #171532, #08090D)",
        },
        ".blue-gradient": {
          background: "linear-gradient(to left, #FFFFFF, #CAC5FE)",
        },
      });

      addBase({
        "*": {
          "border-color": "var(--border)",
          // outline: "var(--ring) 0.125rem solid",
          // "outline-offset": "2px",
        },
        body: {
          background: "var(--background)",
          color: "var(--foreground)",
        },
        p: {
          color: "#d6e0ff", // light-100
        },
        h2: {
          "font-size": "1.875rem",
          "line-height": "2.25rem",
          "font-weight": "600",
        },
        h3: {
          "font-size": "1.5rem",
          "line-height": "2rem",
          "font-weight": "600",
        },
        ul: {
          "list-style-type": "disc",
          "list-style-position": "inside",
        },
        li: {
          color: "#d6e0ff", // light-100
        },
      });

      // Component styles
      addComponents({
        ".btn-call": {
          display: "inline-block",
          padding: "0.75rem 1.75rem",
          fontWeight: "700",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          color: "#ffffff",
          transitionProperty:
            "color, background-color, border-color, text-decoration-color, fill, stroke",
          transitionDuration: "150ms",
          backgroundColor: "#49de50", // success-100
          border: "1px solid transparent",
          borderRadius: "9999px",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          outline: "none",
          "&:focus": {
            boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.5)",
          },
          "&:active": {
            backgroundColor: "#42c748", // success-200
          },
          "&:hover": {
            backgroundColor: "#42c748", // success-200
          },
          minWidth: "7rem",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
          ".span": {
            backgroundColor: "#49de50", // success-100
            height: "85%",
            width: "65%",
          },
        },
        ".btn-disconnect": {
          display: "inline-block",
          padding: "0.75rem 1.75rem",
          fontSize: "0.875rem",
          fontWeight: "700",
          lineHeight: "1.25rem",
          color: "#ffffff",
          transitionProperty:
            "color, background-color, border-color, text-decoration-color, fill, stroke",
          transitionDuration: "150ms",
          backgroundColor: "#f75353", // destructive-100
          border: "1px solid transparent",
          borderRadius: "9999px",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          outline: "none",
          "&:focus": {
            boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.5)",
          },
          "&:active": {
            backgroundColor: "#c44141", // destructive-200
          },
          "&:hover": {
            backgroundColor: "#c44141", // destructive-200
          },
          minWidth: "7rem",
        },
        ".btn-upload": {
          backgroundColor: "#27282f", // dark-200
          borderRadius: "9999px",
          minHeight: "3rem",
          padding: "0 1.25rem",
          cursor: "pointer",
          border: "1px solid var(--input)",
          overflow: "hidden",
          display: "flex",
          minHeight: "3.5rem",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.375rem",
          borderRadius: "0.375rem",
        },
        ".btn-primary": {
          width: "fit-content",
          backgroundColor: "#cac5fe", // primary-200
          color: "#020408", // dark-100
          "&:hover": {
            backgroundColor: "rgba(202, 197, 254, 0.8)", // primary-200/80
          },
          borderRadius: "9999px",
          fontWeight: "700",
          padding: "0 1.25rem",
          cursor: "pointer",
          minHeight: "2.5rem",
        },
        ".btn-secondary": {
          width: "fit-content",
          backgroundColor: "#27282f", // dark-200
          color: "#cac5fe", // primary-200
          "&:hover": {
            backgroundColor: "rgba(39, 40, 47, 0.8)", // dark-200/80
          },
          borderRadius: "9999px",
          fontWeight: "700",
          padding: "0 1.25rem",
          cursor: "pointer",
          minHeight: "2.5rem",
        },
        ".card-border": {
          background: "linear-gradient(to bottom, #4B4D4F, #4B4D4F33)", // border-gradient
          padding: "0.125rem",
          borderRadius: "1rem",
          width: "fit-content",
        },
        ".card": {
          background: "linear-gradient(to bottom, #1A1C20, #08090D)", // dark-gradient
          borderRadius: "1rem",
          minHeight: "100%",
        },
        ".form": {
          width: "100%",
          ".label": {
            color: "#d6e0ff", // light-100
            fontWeight: "400",
          },
          ".input": {
            backgroundColor: "#27282f", // dark-200
            borderRadius: "9999px",
            minHeight: "3rem",
            padding: "0 1.25rem",
            "&::placeholder": {
              color: "#d6e0ff", // light-100
            },
          },
          ".btn": {
            width: "100%",
            backgroundColor: "#cac5fe", // primary-200
            color: "#020408", // dark-100
            "&:hover": {
              backgroundColor: "rgba(202, 197, 254, 0.8)", // primary-200/80
            },
            borderRadius: "9999px",
            minHeight: "2.5rem",
            fontWeight: "700",
            padding: "0 1.25rem",
            cursor: "pointer",
          },
        },
        ".call-view": {
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          "@media (min-width: 640px)": {
            flexDirection: "row",
          },
          h3: {
            textAlign: "center",
            color: "#dddfff", // primary-100
            marginTop: "1.25rem",
          },
          ".card-interviewer": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1.75rem",
            height: "400px",
            background: "linear-gradient(to bottom, #171532, #08090D)", // blue-gradient-dark
            borderRadius: "0.5rem",
            border: "2px solid rgba(202, 197, 254, 0.5)", // primary-200/50
            flex: "1",
            width: "100%",
            "@media (min-width: 640px)": {
              flexBasis: "50%",
            },
          },
          ".avatar": {
            zIndex: "10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to left, #FFFFFF, #CAC5FE)", // blue-gradient
            borderRadius: "9999px",
            width: "120px",
            height: "120px",
            position: "relative",
            ".animate-speak": {
              position: "absolute",
              display: "inline-flex",
              width: "83.333333%",
              height: "83.333333%",
              animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
              borderRadius: "9999px",
              backgroundColor: "#cac5fe", // primary-200
              opacity: "0.75",
            },
          },
          ".card-border": {
            background: "linear-gradient(to bottom, #4B4D4F, #4B4D4F33)", // border-gradient
            padding: "0.125rem",
            borderRadius: "1rem",
            flex: "1",
            width: "100%",
            height: "400px",
            "@media (min-width: 640px)": {
              flexBasis: "50%",
            },
            "@media (max-width: 768px)": {
              display: "none",
            },
          },
          ".card-content": {
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.75rem",
            background: "linear-gradient(to bottom, #1A1C20, #08090D)", // dark-gradient
            borderRadius: "1rem",
            minHeight: "100%",
          },
        },
        ".transcript-border": {
          background: "linear-gradient(to bottom, #4B4D4F, #4B4D4F33)", // border-gradient
          padding: "0.125rem",
          borderRadius: "1rem",
          width: "100%",
          ".transcript": {
            background: "linear-gradient(to bottom, #1A1C20, #08090D)", // dark-gradient
            borderRadius: "1rem",
            minHeight: "3rem",
            padding: "0.75rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: {
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              textAlign: "center",
              color: "#ffffff",
            },
          },
        },
        ".section-feedback": {
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          "@media (max-width: 640px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          ".buttons": {
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            gap: "1rem",
            "@media (max-width: 640px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          },
        },
        ".auth-layout": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80rem",
          minHeight: "100vh",
          "@media (max-width: 640px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          },
        },
        ".root-layout": {
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80rem",
          flexDirection: "column",
          gap: "3rem",
          marginTop: "3rem",
          marginBottom: "3rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          "@media (max-width: 640px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          },
        },
        ".card-cta": {
          display: "flex",
          flexDirection: "row",
          background: "linear-gradient(to bottom, #171532, #08090D)", // blue-gradient-dark
          borderRadius: "1.5rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width: 640px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
        ".interviews-section": {
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          width: "100%",
          alignItems: "stretch",
          "@media (max-width: 1024px)": {
            flexDirection: "column",
          },
        },
        ".interview-text": {
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          textAlign: "center",
          color: "#ffffff",
        },
        ".progress": {
          height: "0.375rem",
          fontSize: "5px",
          fontWeight: "700",
          backgroundColor: "#cac5fe", // primary-200
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".tech-tooltip": {
          position: "absolute",
          bottom: "100%",
          marginBottom: "0.25rem",
          display: "none",
          padding: "0.25rem 0.5rem",
          fontSize: "0.75rem",
          color: "#ffffff",
          backgroundColor: "#374151", // gray-700
          borderRadius: "0.375rem",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          ".group:hover &": {
            display: "flex",
          },
        },
        ".card-interview": {
          background: "linear-gradient(to bottom, #1A1C20, #08090D)", // dark-gradient
          borderRadius: "1rem",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
          position: "relative",
          overflow: "hidden",
          gap: "2.5rem",
          justifyContent: "space-between",
          ".badge-text": {
            fontSize: "0.875rem",
            fontWeight: "600",
            textTransform: "capitalize",
          },
        },
      });
    },
  ],
  corePlugins: {
    animation: true,
  },
};
