export interface Theme {
    background: {
      default: string;
      light: string;
      dark: string;
      primary: string;
      secondary: string;
      black_100: string;
  
    },
    colors: {
      primary: string;
      white_90: string;
      white_60: string;
      black_60: string;
      textSecondary: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      headingFontSize: string;
    };
  }