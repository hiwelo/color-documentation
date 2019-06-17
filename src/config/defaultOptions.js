const defaultOptions = {
  content: {
    mainHeading: {
      content: 'Colour documentation',
      markup: 'h1',
    },
    paletteHeading: {
      prefixContent: '',
      suffixContent: 'palette',
      markup: 'h2',
    }
  },
  styles: {
    classPrefix: 'colorDoc-',
    typography: {
      stack: '-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, Arial, sans-serif',
    },
  }
};

export default defaultOptions;
