import { type User } from '../../types/user'
import customFetch from '../../utils/axios'

export const loginUserThunk = async (
  url: string,
  user: User,
  thunkAPI: any
) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
}
