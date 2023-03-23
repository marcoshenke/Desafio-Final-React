import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Routes from "./Routes";
import { theme } from "./theme";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
