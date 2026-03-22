export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'bg-green-500/10', 'bg-blue-500/10', 'bg-orange-500/10', 'bg-red-500/10',
    'border-green-500/20', 'border-blue-500/20', 'border-orange-500/20', 'border-red-500/20',
    'text-green-400', 'text-blue-400', 'text-orange-400', 'text-red-400',
  ],
  theme: { extend: {} },
  plugins: [],
}
