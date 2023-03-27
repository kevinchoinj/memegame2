import "@/styles/globals.css";
import { wrapper } from "store";
import { styled } from "@mui/system";
import Navigation from "components/general/navigation";
import FetchChars from "components/services/fetchChars";
import ResourceIncrementer from "components/services/resourceIncrementer";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "theme";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "createEmotionCache";

const clientSideEmotionCache = createEmotionCache({ key: 'css' });

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

function App({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
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
