import Routes from './Routes'
import {ThemeProvider} from '@mui/styles'
import {theme} from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>   
  );
}

export default App;
