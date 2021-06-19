import Axios from 'axios'

const BASE_URL = 'https://api.github.com'

export function login(token) {

  const config = {
    headers: {
      "Accept": "application/vnd.github.v3+json",
      "Authorization": `token ${token}`,
    }
  }
  return dispatch => {
    console.log(token)
    const authAxios =Axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `token ${token}`
      }
    })
    authAxios.get(`/user/repos`, { username: token })
      .then(resp => {
        dispatch({
          type: 'LOGIN',
          payload: resp.data
        })
      })
      .catch(err => {
        console.error(err.message)
      })
  }
}