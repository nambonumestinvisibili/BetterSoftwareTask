const LOCAL_STORAGE_JWT_TOKEN_NAME = 'JWT_TOKEN'

export const getJwtToken = () => localStorage.getItem(LOCAL_STORAGE_JWT_TOKEN_NAME)

export const setJwtToken = token => localStorage.setItem(LOCAL_STORAGE_JWT_TOKEN_NAME, token)

export const prepareJwtHeader = () => {
  const jwt = getJwtToken()
  return jwt
    ? {
      Authorization: `Bearer ${jwt}`
    }
    : {

    }
}