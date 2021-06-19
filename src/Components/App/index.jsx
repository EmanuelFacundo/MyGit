import React, { useState } from 'react'
import { connect } from 'react-redux';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core'

import { Root } from './styles'
import Octocat from '../static/Octocat.png'
import Auth from '../Auth';
import Home from '../Home';

function App(props) {
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

  const [ dark, setDark ] = useState(false)

  const { login } = props.user
  console.log(login)
  return (
    <ThemeProvider theme={theme}>
      <Root dark={dark}>
        {login === '' ?
          <>
            <img src={Octocat} width={100} height={100} alt="octocat" />
            <h1 style={{ marginBottom: '2rem' }}>My Github</h1>
            <Auth />
          </>
          :
          <Home 
            avatar={props.user.avatar_url} 
            setDark={setDark}
            dark={dark}
            name={props.user.name}
          />
        }
      </Root>
      <CssBaseline />
    </ThemeProvider>
  )
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps)(App)