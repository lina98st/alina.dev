/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',          // Pfad zur HTML-Datei
    './src/**/*.{html,js}',  // Alle HTML- und JS-Dateien im src-Ordner
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF6F61', // Dein Coral Farbwert
        mint: '#e8f5e9',  // Dein Mintgrün Farbwert
        coraldark: '#e75a4c', // ein dunkles Coral
      },
      fontSize: {
        base: '1.125rem', // Ändert die Basisgröße auf 18px
        // Weitere benutzerdefinierte Schriftgrößen können hier hinzugefügt werden
      },
    },
  },
  plugins: [],
};
