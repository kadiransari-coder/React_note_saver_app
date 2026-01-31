import { createSlice } from '@reduxjs/toolkit'

const initialState ={
 pastes:localStorage.getItem('pastes')
 ? JSON.parse(localStorage.getItem("pastes"))
 :[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addTopastes: (state, action) => {
     const paste = action.payload;
     state.pastes.push(paste)
     localStorage.setItem("pastes"),
     JSON.stringify(state.pastes)
    },
    UpdateTopastes: (state, action) => {
     
    },
    removeTopastes: (state, action) => {
     
    },
     resetpastes: (state, action) => {
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTopastes, UpdateTopastes, removeTopastes, resetpastes} = pasteSlice.actions

export default pasteSlice.reducer