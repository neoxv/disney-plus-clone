import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    name: "",
    email: "",
    profile: ""
 }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogin:(state,action)=>{
            state.name = action.payload.name
            state.email = action.payload.email
            state.profile = action.payload.profile
        },
        setSignOut:(state)=>{
            state.name = ""
            state.email =""
            state.profile = ""
        },
        logout(state) {
            state.value--
        }
    },
})

export const { setUserLogin, setSignOut } = userSlice.actions

export const selectUserName = (state) => state.user.name
export const selectUserEmail = (state)=> state.user.email
export const selectUserProfile = (state) => state.user.profile

export default userSlice.reducer