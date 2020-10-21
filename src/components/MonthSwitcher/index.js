import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
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
          <div className='month-container' >
            <ThemeProvider theme={innerTheme}>
              <IconButton >
                <ChevronLeft color="secondary"/>
              </IconButton>
              <MenuItem>
                October 2020
              </MenuItem>
              <IconButton >
                <ChevronRight color="secondary"/>
              </IconButton>
            </ThemeProvider>
          </div>
  );
}