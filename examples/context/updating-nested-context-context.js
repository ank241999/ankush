// Stelle sicher, dass die Form des Standardwertes, welcher an createContext
// ├╝berreicht wird mit der Form die der Konsument erwartet, ├╝bereinstimmt!
// highlight-range{2-3}
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
