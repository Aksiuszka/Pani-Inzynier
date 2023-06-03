export interface Theme {
  palette: {
    primary: {
      light: string;
      dark: string;
      main: string;
    };
    secondary: {
      light: string;
      dark: string;
    };
    tertiary: {
      main: string;
    };
    text: {
      light: string;
      dark: string;
      headline: string;
      accent: string;
    };
  };
}
