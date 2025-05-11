
import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   role: null,
//   name: null,
//   password: null
// };

const initialState =     {
        email: "abc@gmail.com",
        password: "123",
        role: "freelancer",
        name: "John Doe",
        location: "Lahore",
        balance: "0",
        rating: {
            value: 4.5,
            count: 28
        },
        billingInfo: {
            holderName: 'abc xyz',
            cardNumber: "5555555555554444",
            expiryDate: "11/27",
            cvc: "456",
            billingAddress: "456 Business Road, Karachi"
        },
        freelancerProfile: {
            title: "Software Engineer | MERN Stack",
            skills: ["React", "Node.js"],
            hourlyRate: 30,
            experienceLevel: "intermediate",
            bio: "SOFTWARE ENGINEERING STUDENT...",
            proposals: ["proposalId1", "proposalId2"],
            spent: 0,
            earned: 1200,
            workHistory: [
                {
                    title: "Frontend Developer",
                    company: "ABC Solutions",
                    startDate: "2021-01-01",
                    endDate: "2023-01-01",
                    description: "Built and maintained frontend applications using React."
                }
            ],
            education: [
                {
                    degree: "BS in Software Engineering",
                    institution: "FAST NUCES",
                    startDate: "2015-08-01",
                    endDate: "2019-06-01"
                }
            ],
            languages: [
                { name: "English", proficiency: "Fluent" },
                { name: "Urdu", proficiency: "Native" }
            ],
            projectsCatalog: []
        },
        clientProfile: {
            companyName: "Tech Innovate",
            jobsPosted: ["jobId1", "jobId2"],
            industry: "Tech & IT",
            companyWebsite: "https://techinnovate.com",
            description: "Lorem ipsum...",
            spent: 2000,
            earned: 0
        },
        createdAt: "2024-01-01T00:00:00Z"
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
