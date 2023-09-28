import {createTheme} from '@mui/material/styles'

const customTheme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: 'unset !important',
            boxShadow: "unset !important",
             // Change the background color
            // Add any other styles as needed
          },
        },
      },
    },
  });
  export default customTheme;