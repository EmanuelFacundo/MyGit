import styled from 'styled-components'

const windowWidth = document.documentElement.clientWidth
const windowHeight = document.documentElement.clientHeight
const width = `${windowWidth}px`;
const height = `${windowHeight}px`

export const Root = styled.div`
  width: ${width};
  height: ${height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
`