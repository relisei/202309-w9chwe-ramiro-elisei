import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    padding: string;

    colors: {
      main: string;
      secondary: string;
    };

    typography: {
      fontLogo: string;
      sansSerif: string;
    };
  }
}
