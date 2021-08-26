const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fffff00',
    "baseBackground": "#fcfcfc",
    "headerColor": "#f7f7f7",
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#00193300',
    baseBackgroundColor: '#2d2f43',
    headerColor: '#292a3a',
    'borderColor': '#383a50',
    heading: '#fff',
    text: '#cdcdcd',
    preFormattedText: '#000',
    link: '#9debff',
  },
};

export { lightTheme, darkTheme };
