import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'

export const HomeRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  width: 100%;
  height: 8rem;
  background: #1976d2;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow:    0px 5px 8px 0px rgba(0, 0, 0, 0.45);
  box-shadow:         0px 5px 8px 0px rgba(0, 0, 0, 0.45);
  text-shadow: 2px 2px 6px #44444455;
`

export const Octocat = styled.div`
  height: 6rem;
  width: 16.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  cursor: default;

  img {
    height: 6rem;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  h2 {
    cursor: default;
  }
`
export const Dark = styled.div`
  display: flex;
  align-items: center;
  height: 0rem;
`

export const ProfileAndDark = styled.div`
  display: flex;
  flex-direction: column;
`
export const avatar = makeStyles({
  style: {
    width: '5rem',
    height: '5rem',
    boxShadow: '0px 0px 8px 0px #000000',
    marginLeft: '1rem'
  }
}) 