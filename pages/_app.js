import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import NavBar from "../components/NavBar/NavBar";
import Theme from "../theme/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
