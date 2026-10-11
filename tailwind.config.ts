import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        muted: "hsl(var(--muted))",
        background: "hsl(var(--background))",
        brand: {
          brick: "#C12721",
          mahogany: "#581A13",
          matcha: "#616B24",
          olive: "#B0A56B",
          sand: "#DFD0B3",
          robin: "#98BAB7",
          ink: "#17120F",
          cream: "#F3E9D7",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.12)",
        lift: "0 12px 30px rgba(88,26,19,0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;

