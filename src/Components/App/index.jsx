import React from 'react'
import { CssBaseline, ThemeProvider, createMuiTheme  } from '@material-ui/core'

import { Root } from './styles'
import Octocat from './Octocat.png'
import Auth from '../Auth';

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#26a69a',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <img src={Octocat} width={100} height={100} alt="octocat" />
        <h1 style={{marginBottom: '2rem'}}>My Github</h1>
        <Auth />
      </Root>
      <CssBaseline />
    </ThemeProvider>
  )
}