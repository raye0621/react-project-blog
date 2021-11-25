import { getAuthToken } from './utils'

const BASE_URL = 'https://student-json-api.lidemy.me'

export const getPosts = () => {
  try {
    return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`)
      .then((res) => res.json())
  } catch {
    return console.log('getPosts 出事了')
  }
}

// 直接 call 分頁
export const getPost = () => {
  return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc&_page=1&_limit=5`)
  .then((res) => res.json())
}

export const getPage = (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`)
    .then((res) => res.json())
}

export const getSinglePost = (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`)
    .then((res) => res.json())
}

export const register = (username, password, nickname) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
      nickname
    })
  }).then((res) => res.json())
}

export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => res.json())
}

// 登入～這邊把 token 從 localStorage 中拿出來(JWT 的登入憑證 token 放在 localStorage 裡面)
export const getMe = async () => {
  const token = getAuthToken()
  const res = await fetch(`${BASE_URL}/me`, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
  return await res.json()
}

export const postPage = (title, body) => {
  const token = getAuthToken()
  if (!token) return
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      title,
      body
    })
  })
  .then(res => res.json())
}
