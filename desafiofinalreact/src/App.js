import { CssBaseline } from "@mui/material";
import { ThemeProvider} from "@mui/material/styles";
import Routes from './Routes'
import {theme} from './theme'

function App() {
  
 
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes />
      </ThemeProvider>   
      
     
  
  );
}

export default App;
