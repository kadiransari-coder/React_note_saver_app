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
    addTopastes: (state) => {
     
    },
    UpdateTopastes: (state) => {
     
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