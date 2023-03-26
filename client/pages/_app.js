import "@/styles/globals.css";
import { wrapper } from "store";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Navigation from "components/general/navigation";
import FetchChars from "components/services/fetchChars";
import { themeData } from "@/data/themeData";
import ResourceIncrementer from "components/services/resourceIncrementer";

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  flex: 1;
`;
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  overflow-y: auto;
`;
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeData}>
      <StyledMainWrapper>
        <StyledWrapper>
          <ResourceIncrementer />
          <FetchChars />
          <Navigation />
          <Component {...pageProps} />
        </StyledWrapper>
      </StyledMainWrapper>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
