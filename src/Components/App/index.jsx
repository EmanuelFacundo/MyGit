import React, { useState } from 'react'
import { connect } from 'react-redux';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core'

import { Root } from './styles'
import Octocat from '../static/Octocat.png'
import Auth from '../Auth';
import Home from '../Home';
import Cookies from 'js-cookie';
import { login } from '../Reducer/action';
import { bindActionCreators } from 'redux';

function App(props) {

  const [dark, setDark] = useState(false)

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

  try {
    const token = Cookies.get("MyGitAccess")
    if (token !== undefined && token !== '') {
      props.login(token)
      return (
        <ThemeProvider theme={theme}>
          <Root dark={dark}>
            <Home
              avatar={props.user.avatar_url}
              setDark={setDark}
              dark={dark}
              name={props.user.name}
            />
          </Root>
          <CssBaseline />
        </ThemeProvider>
      )
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Root dark={dark}>
            <img src={Octocat} width={100} height={100} alt="octocat" />
            <h1 style={{ marginBottom: '2rem' }}>My Github</h1>
            <Auth />
          </Root>
          <CssBaseline />
        </ThemeProvider>
      )
    }
  } catch (e) {

  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)