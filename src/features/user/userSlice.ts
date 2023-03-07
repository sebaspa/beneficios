import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { toast } from 'react-toastify'
import { type User, type userInitialState } from '../../types/user'
import {
  getUserFromLocalStorage,
  setLocalStorage
  , removeLocalStorage
} from '../../utils/localStorage'
import { loginUserThunk, clearStoreThunk } from './userThunk'

const initialState: userInitialState = {
  isLoading: false,
  user: getUserFromLocalStorage()
}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user: User, thunkAPI) => {
    return await loginUserThunk('/login', user, thunkAPI)
  }
)

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null
      removeLocalStorage('user')
      if (payload !== '' && payload !== undefined) {
        toast.success(payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { user, accessToken } = payload
      state.isLoading = false
      user.accessToken = accessToken
      state.user = user
      setLocalStorage('user', user)
      toast.success(i18n.t('user.welcome-name', { name: user.name }))
    })
    builder.addCase(loginUser.rejected, (state, { payload }: any) => {
      state.isLoading = false
      toast.error(i18n.t('login.login-failed'))
      console.error('Error: ', payload)
    })
    builder.addCase(clearStore.rejected, (state) => {
      toast.error('There was an error')
    })
  }
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer
