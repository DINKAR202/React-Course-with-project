import { createSlice } from '@reduxjs/toolkit'

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
  },
  reducers: {
    addToPastes: (state, action) => {

    },
    updateToPastes: (state, action) => {
    
    },
    resetAllPastes: (state, action) => {
    
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = pasteSlice.actions

export default counterSlice.reducer