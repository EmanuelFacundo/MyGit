import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Link from '@material-ui/core/Link'
import { Input, Button } from '@material-ui/core'

import { login } from '../Reducer/action'

import { AuthBox, inputAuth } from './styles'

function Auth(props) {
  const styles = inputAuth()
  const [token, setToken] = useState("")
  
  return (
    <AuthBox>
      <h2>Use you GitHub <Link
        href="https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"
        target="_blank"
        rel="noreferrer"
      >
        personal access token</Link> to login</h2>
      <Input className={styles.user}
        type="text"
        placeholder="Enter you personal access token"
        value={token}
        onChange={e => setToken(e.target.value)}
      />
      <Button
        onClick={() => props.login(token)}
        variant="contained"
        className={styles.buttonLogin}
        color="secondary"
      >
        LOGIN</Button>
      <Link
        target="_blank"
        rel="noreferrer"
        className={styles.buttonCode}
        href="https://github.com/EmanuelFacundo/MyGit">
          Our source code {"</>"}
      </Link>
    </AuthBox>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

export default connect(null,mapDispatchToProps)(Auth)