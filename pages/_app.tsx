import { ThemeProvider } from "@material-tailwind/react";
import theme from "@/shared/style/Theme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
