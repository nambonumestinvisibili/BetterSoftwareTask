import { authApi } from "../../api/api"
import { getJwtToken, setJwtToken } from "./auth-header"


export const loginAsAnonymousUser = async (deviceName, callback) => {
    const result = await authApi.loginAnonymousyly(deviceName);
    const token = result.data?.AuthorizationToken?.Token
    token && setJwtToken(token)
    callback()
}


  