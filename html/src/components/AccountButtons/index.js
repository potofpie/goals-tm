import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/grey';
import './index.css';



const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: white[50],
    },
  },
});


export default function PersistentDrawerLeft(props) {
  return (
          <div className='right-container' >
            <ThemeProvider theme={innerTheme}>
              <IconButton >
                  <AccountCircle color="secondary"/>
              </IconButton>
            </ThemeProvider>
          </div>
  );
}