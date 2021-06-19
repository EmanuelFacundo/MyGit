import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'

import { padding } from '../utils'

export const AuthBox = styled.div`
  width: 36rem;
  height: 25rem;

  letter-spacing: 0.085rem;
  padding: ${padding()}% ${padding()}%;
  
  background-color: #1565c0;
  -webkit-box-shadow: 5px 5px 24px 0px rgba(50, 50, 50, 0.5);
  -moz-box-shadow:    5px 5px 24px 0px rgba(50, 50, 50, 0.5);
  box-shadow:         5px 5px 24px 0px rgba(50, 50, 50, 0.5);

  border-radius: 0.5rem;

`
export const inputAuth = makeStyles({
 user: {
  width: '100%',
  height: '3.5rem',

  backgroundColor: '#e0e0e066',
  
  borderRadius:' 0.5rem 0.5rem 0 0',
  
  paddingLeft: '0.5rem',
  marginTop: '2rem',
  
  fontSize: '1.5rem',

  transition: 'all 0.25s linear',
 },
  buttonLogin: {
    width: '100%',
    height: '3.5rem',
    backgroundColor: '#26a69a',

    marginTop: '1.5rem',
    marginBottom: '7rem'
  },
  buttonCode: {
    fontSize: '0.85rem',
    textDecoration: 'none'
  }
})