import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({  
  palette: {
    primary: {
      main: '#0E499D',
    },
    secondary: {
      main: '#D30529',
    },
  },
  
});

theme = responsiveFontSizes(theme)
export default theme