import { type User } from '../../types/user'
import customFetch from '../../utils/axios'
import { logoutUser } from './userSlice'

export const loginUserThunk = async (
  url: string,
  user: User,
  thunkAPI: any
): Promise<any> => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
}

export const clearStoreThunk = async (message: string, thunkAPI: any): Promise<void> => {
  try {
    thunkAPI.dispatch(logoutUser(message))
    await Promise.resolve(); return
  } catch (error) {
    await Promise.reject(error)
  }
}
