import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globaStyles";
import vivoTheme from "./styles/themes/vivo.style";
import Home from "./pages/Home/Home";

function App() {

  return (
    <>
      <ThemeProvider theme={vivoTheme}>
        <GlobalStyle />        
        <Home />       
      </ThemeProvider>
    </>
  )
}

export default App
