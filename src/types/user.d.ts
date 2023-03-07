export interface User {
  accessToken: string
  band: string
  company: string
  country: string
  email: string
  id: string
  job: string
  lastname: string
  name: string
  photo: string
  username: string
  sharpId: string
  vc: string
}
export interface userInitialState {
  isLoading: boolean
  user: User | null
}

export interface UserLogin {
  email: string
  password: string
}
