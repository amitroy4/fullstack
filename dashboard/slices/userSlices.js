import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    activeUser: (state,action) => {
      state.value = actions.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { activeUser } = userSlice.actions

export default userSlice.reducer