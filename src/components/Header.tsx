@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-black text-white antialiased;
  font-family: var(--font-inter), sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-manrope), sans-serif;
}

::selection {
  background: rgba(0, 217, 255, 0.35);
  color: white;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.04);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 217, 255, 0.5);
  border-radius: 999px;
}

input, textarea, select, button {
  font: inherit;
}

.card-glass {
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(12px);
}

.nokes-ring {
  box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 0 20px rgba(0, 217, 255, 0.08);
}

.grid-overlay {
  background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 24px 24px;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #d4d4d8 50%, #00d9ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

