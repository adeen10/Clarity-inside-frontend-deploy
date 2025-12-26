/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "#FFFFFF",
                input: "#FFF8F1",
                ring: "#147472",
                background: "#FFFFFF",
                foreground: "#2F3A3C",
                primary: {
                    DEFAULT: "#147472",
                    foreground: "#FFF8F1",
                },
                secondary: {
                    DEFAULT: "#50A9A6",
                    foreground: "#FFF8F1",
                },
                destructive: {
                    DEFAULT: "hsl(0 84.2% 60.2%)",
                    foreground: "hsl(0 0% 98%)",
                },
                muted: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#2F3A3C",
                },
                accent: {
                    DEFAULT: "#50A9A6",
                    foreground: "#FFF8F1",
                },
                popover: {
                    DEFAULT: "#FFF8F1",
                    foreground: "#2F3A3C",
                },
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#2F3A3C",
                },
                brand: {
                    teal: "#147472",
                    glow: "#50A9A6",
                    cream: "#DDFFFE",
                    fog: "#DFD9D280",
                    slate: "#2F3A3C",
                    tint: "#14716F0A",
                },
                sidebar: {
                    DEFAULT: "oklch(var(--sidebar) / <alpha-value>)",
                    foreground: "oklch(var(--sidebar-foreground) / <alpha-value>)",
                    primary: "oklch(var(--sidebar-primary) / <alpha-value>)",
                    "primary-foreground": "oklch(var(--sidebar-primary-foreground) / <alpha-value>)",
                    accent: "oklch(var(--sidebar-accent) / <alpha-value>)",
                    "accent-foreground": "oklch(var(--sidebar-accent-foreground) / <alpha-value>)",
                    border: "oklch(var(--sidebar-border) / <alpha-value>)",
                    ring: "oklch(var(--sidebar-ring) / <alpha-value>)",
                }
            },
            borderRadius: {
                lg: "18px",
                md: "14px",
                sm: "10px",
                xl: "24px",
                '2xl': "30px",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
