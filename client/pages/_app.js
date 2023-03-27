import "@/styles/globals.css";
import { wrapper } from "store";
import { styled } from "@mui/system";
import Navigation from "components/general/navigation";
import FetchChars from "components/services/fetchChars";
import ResourceIncrementer from "components/services/resourceIncrementer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const StyledMainWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflow: "hidden",
  flex: 1,
});
const StyledWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flex: 1,
  overflowY: "auto",
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <StyledMainWrapper>
          <StyledWrapper>
            <ResourceIncrementer />
            <FetchChars />
            <Navigation />
            <Component {...pageProps} />
          </StyledWrapper>
        </StyledMainWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(App);
