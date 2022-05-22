import axios from "axios"
import { prepareJwtHeader } from "../services/auth/auth-header"

const API_URL = 'https://thebetter.bsgroup.eu/'

const instance= axios.create({
  baseURL: API_URL,
  headers: prepareJwtHeader()
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