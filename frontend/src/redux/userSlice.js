import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  _id: "",
  email: "",
  password: "",
  role: "",
  name: "",
  location: "",
  balance: "0",
  rating: {
    value: 0,
    count: 0
  },
  billingInfo: {
    holderName: '',
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    billingAddress: ""
  },
  freelancerProfile: {
    title: "",
    skills: [],
    hourlyRate: 0,
    experienceLevel: "",
    bio: "",
    proposals: [],
    spent: 0,
    earned: 0,
    workHistory: [],
    education: [],
    languages: [],
    projectsCatalog: []
  },
  clientProfile: {
    companyName: "",
    jobsPosted: [],
    industry: "",
    companyWebsite: "",
    description: "",
    spent: 0,
    earned: 0
  },
  createdAt: ""
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Update the entire user state after successful login
    updateUser(state, action) {
      return { ...state, ...action.payload };
    },
    resetUser() {
      return initialState;
    },
    // Update a specific field inside the user object using a path like "billingInfo.cardNumber"
    updateUserField(state, action) {
      const { path, value } = action.payload;

      // Split the path by "." and navigate the state object
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
