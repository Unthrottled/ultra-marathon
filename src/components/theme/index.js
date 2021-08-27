const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    "infoForeground": "#5282a2",
    background: '#fffff00',
    "baseBackground": "#fcfcfc",
    "headerColor": "#f5f5f5",
    "secondaryBackground": "#fcfcfc",
    heading: '#000',
    text: '#252427',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#a61d0d',
    "selectionBackground": "#e9b4b8",
    "selectionForeground": "#393d45",
    "accentColor": "#a61d0d",
    "borderColor": "#eeeeee",
    "caretRow": "#f6f6f6",
    "comments": "#6a737d",
    "accentColorTransparent": "#a61d0d5A",
    "baseIconColor": "#85838b",
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    "infoForeground": "#b0a17f",
    background: '#00193300',
    baseBackground: '#2d2f43',
    headerColor: '#292a3a',
    "secondaryBackground": "#272935",
    heading: '#fff',
    text: '#cdcdcd',
    preFormattedText: '#000',
    link: '#9debff',
    "selectionBackground": "#374872",
    "selectionForeground": "#fefefe",
    "accentColor": "#9debff",
    "borderColor": "#383a50",
    "caretRow": "#333446",
    "comments": "#686a80",
    "accentColorTransparent": "#9debff5A",
    "baseIconColor": "#6c6f7d",
  },
};

export { lightTheme, darkTheme };
