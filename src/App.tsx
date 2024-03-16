import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/globaStyles";
import vivoTheme from "./styles/themes/vivo.style";

function App() {

  return (
    <>
      <ThemeProvider theme={vivoTheme}>
        <GlobalStyle />
        <Header />
        <h1>Meu VIVO empresas</h1>
      </ThemeProvider>
    </>
  )
}

export default App
