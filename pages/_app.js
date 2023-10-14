import "styles/globals.css";
import "antd/dist/reset.css";
import "react-phone-input-2/lib/style.css";
import { AppWrapper } from "src/context/state";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {

  const theme = {
    primary: "red"
  }

  if (Component.getLayout) {
    return Component.getLayout(
      <AppWrapper>
        <Component {...pageProps} />{" "}
      </AppWrapper>
    )
  }

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp