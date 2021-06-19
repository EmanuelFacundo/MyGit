import Axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = 'https://api.github.com'

export function login(token) {

  return dispatch => {
    const authAxios = Axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `token ${token}`
      }
    })
    authAxios.get(`/user`, { username: token })
      .then(resp => {
        Cookies.set("MyGitAccess", token, { expires: 2, path: '/' })
        dispatch({
          type: 'LOGIN',
          payload: resp.data
        })
      })
      .catch(err => {
        token === '' ? alert("Required pessoal access token") :
          alert("Invalid pessoal access token")
      })
  }
}