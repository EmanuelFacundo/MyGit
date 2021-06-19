import { combineReducers } from 'redux'

import reducer from './Components/Reducer'

const rootReducer = combineReducers({
  user: reducer
})

export default rootReducer