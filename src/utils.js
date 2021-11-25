const TOKEN_NAME = 'token'

export const setAuthToken = token => {
	localStorage.setItem(TOKEN_NAME, token)
}

// 從 localStorage 拿出 token
export const getAuthToken = () => {
	return localStorage.getItem(TOKEN_NAME)
}
