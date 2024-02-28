import { createSlice } from '@reduxjs/toolkit';
// import { register, login, logout, updateUser } from './auth-operations';

const initialState = {
  user: {},
  sid: null,
  accessToken: null,
  refreshToken: null,
  isLogin: false,
  loading: false,
  isRefreshing: false,
  error: '',
  message: '',
};

// const accessAuth = (store, payload) => {
//   store.loading = false;
//   store.isLogin = true;
//   store.user = payload.user;
//   store.sid = payload.sid;
//   store.accessToken = payload.accessToken;
//   store.refreshToken = payload.refreshToken;
// };

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUser: () => ({ ...initialState }),
    clearUserError: store => {
      store.error = '';
    },
    clearUserMessage: store => {
      store.message = null;
    },
  },
  extraReducers: builder => {
    // builder
    //   .addCase(register.pending, store => {
    //     store.loading = true;
    //     store.error = '';
    //   })
    //   .addCase(register.fulfilled, (store, { payload }) => {
    //     store.loading = false;
    //     store.isLogin = false;
    //     store.newUser = payload;
    //     store.user = { ...store.user };
    //     store.sid = '';
    //     store.accessToken = '';
    //     store.refreshToken = '';
    //   })
    //   .addCase(register.rejected, (store, { payload }) => {
    //     store.loading = false;
    //     store.error =
    //       payload?.data?.message || 'Oops, something went wrong, try again';
    //   })
    //   .addCase(login.pending, store => {
    //     store.loading = true;
    //     store.error = '';
    //   })
    //   .addCase(login.fulfilled, (store, { payload }) =>
    //     accessAuth(store, payload)
    //   )
    //   .addCase(login.rejected, (store, { payload }) => {
    //     store.loading = false;
    //     if (payload && payload.data) {
    //       store.error =
    //         payload?.data?.message || 'Oops, something went wrong, try again';
    //     } else {
    //       store.error = payload.message;
    //     }
    //   })
    //   .addCase(logout.pending, store => {
    //     store.loading = true;
    //     store.error = '';
    //     store.isRefreshing = true;
    //   })
    //   .addCase(logout.fulfilled, store => {
    //     store.user = {};
    //     store.sid = '';
    //     store.accessToken = '';
    //     store.refreshToken = '';
    //     store.isLogin = false;
    //     store.loading = false;
    //     store.isRefreshing = true;
    //     store.error = '';
    //   })
    //   .addCase(logout.rejected, (store, { payload }) => {
    //     store.loading = false;
    //     if (payload && payload.data) {
    //       store.error =
    //         payload?.data?.message || 'Oops, something went wrong, try again';
    //     } else {
    //       store.error = payload.message;
    //     }
    //   })
    //   .addCase(updateUser.pending, store => {
    //     store.loading = true;
    //     store.isRefreshing = true;
    //     store.error = '';
    //   })
    //   .addCase(updateUser.fulfilled, (store, { payload }) => {
    //     accessAuth(store, payload);
    //     store.isRefreshing = false;
    //   })
    //   .addCase(updateUser.rejected, (store, { payload }) => {
    //     store.loading = false;
    //     store.isRefreshing = false;
    //     if (payload && payload.data) {
    //       store.error =
    //         payload?.data?.message || 'Oops, something went wrong, try again';
    //     } else {
    //       store.error = payload.message;
    //     }
    //   });
  },
});

export default auth.reducer;
export const { clearUser, clearUserError, clearUserMessage } = auth.actions;
