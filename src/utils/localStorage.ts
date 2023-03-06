export const setLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key)
}

export const getUserFromLocalStorage = (): any => {
  const result = localStorage.getItem('user')
  let user
  if (result !== null && result !== undefined) {
    user = JSON.parse(result)
  } else {
    user = null
  }
  return user
}
