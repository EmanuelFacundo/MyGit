import { createGlobalStyle } from 'styled-components'

import { fontSize } from './Components/utils'

export const Global = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${fontSize(18)};    
  }
`;

export default Global