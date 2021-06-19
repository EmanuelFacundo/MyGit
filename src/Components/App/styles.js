import styled from 'styled-components'

import { windowWidth as width, windowHeight as height } from '../utils'

export const Root = styled.div`
  width: ${width}px;
  height: ${height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.dark ? "#212121" : "#f5f5f5"};
  font-family: 'Roboto', sans-serif;
`