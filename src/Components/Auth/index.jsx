import React from 'react'
import Link from '@material-ui/core/Link'
import { Input, Button } from '@material-ui/core'

import { AuthBox, inputAuth } from './styles'

export default function Auth() {
  const styles = inputAuth()
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
      />
      <Button
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