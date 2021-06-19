
const INITIAL_STATE = {
  user: {
    id: 0,
    location: '',
    bio: '',
    name: '',
    login: '',
    avatar_url: '',
    repos_url: '',
    repos: {
      name: '',
      private: false,
      html_url: '',
      created_at: '',
      updated_at: '',
      homepage: '',
      size: '',
      language: '',
    }
  }
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type){
    case 'LOGIN': 
      return { ...state, user: action.payload }

    default:
      return state
  }
}