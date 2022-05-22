import axios from "axios"
import { clearJwtToken, prepareJwtHeader } from "../services/auth/auth-header"

const API_URL = 'https://thebetter.bsgroup.eu/'

const HTTP_401 = 401

const instance= axios.create({
  baseURL: API_URL,
  headers: prepareJwtHeader()
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === HTTP_401) {
    clearJwtToken()
    window.location.reload()
  }
  return error
})

export const authApi = {
  loginAnonymousyly: deviceName => instance
    .post('Authorization/SignIn', {
      Device: {
        PlatformCode: "WEB",
        Name: deviceName
      }
    }),
}

export const videosApi = {
  getListOfVideos: (body) => instance
    .post('Media/GetMediaList', body)
}