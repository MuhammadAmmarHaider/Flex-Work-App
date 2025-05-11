import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: null,
  name: null,
  password: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      return { ...state, ...action.payload };
    },
    resetUser() {
      return initialState;
    },
    updateUserField(state, action) {
      const { path, value } = action.payload;

      // Pure JS way:
      const keys = path.split('.');
      let current = state;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = isNaN(keys[i]) ? keys[i] : Number(keys[i]);
        current = current[key];
      }

      const lastKey = isNaN(keys[keys.length - 1]) ? keys[keys.length - 1] : Number(keys[keys.length - 1]);
      current[lastKey] = value;

    }
  }
});

export const { updateUser, resetUser, updateUserField } = userSlice.actions;
export default userSlice.reducer;
