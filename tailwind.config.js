/** @type {import("tailwindcss").Config} */

import colors from "tailwindcss/colors"

export const content = ["./src/**/*.{tsx,ts}"]

export const theme = {
  extend: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      display: ["Urbanist", "system-ui", "sans-serif"]
    },
    colors: {
      primary: {
        "100": "#C1D4E8",
        "200": "#87A6C8",
        "300": "#577BA9",
        "400": "#325589",
        "500": "#16346A",
        "600": "#041C4B",
        "700": "#030E36",
        "800": "#020521",
        "900": "#01010D",
      },
      secondary: {
        "100": "#D9D9D9",
        "200": "#A6A6A6",
      },
      gray: colors.neutral,
    }
  }
}
export const plugins = []

