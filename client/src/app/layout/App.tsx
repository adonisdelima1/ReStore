import Catalog from "../../features/catalog/Catalog"
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import Header from "./Header"
import { useState } from "react"


function App() { 
  const [darkMode, setDarkMode] = useState(false) 
  const paletteType = darkMode ? 'dark' : 'light'
  
  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  }) 

  function handleChange() {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header checked={darkMode} handleChange={handleChange} />
      <Container>
        <Catalog /> 
      </Container>
    </ThemeProvider>
  )
}

export default App
