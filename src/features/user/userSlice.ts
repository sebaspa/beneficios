import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import i18n from 'i18next'
import { toast } from 'react-toastify'
import { type User, type userInitialState } from '../../types/user'
import {
  getUserFromLocalStorage,
  setLocalStorage
} from '../../utils/localStorage'
import { loginUserThunk } from './userThunk'

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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      setLocalStorage('user', user)
      // toast.success(i18n.t("login.login-failed");
    })
    builder.addCase(loginUser.rejected, (state, { payload }: any) => {
      state.isLoading = false
      toast.error(i18n.t('login.login-failed'))
      console.log('payload', payload)
    })
  }
})

export default userSlice.reducer
