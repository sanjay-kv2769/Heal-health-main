import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import axios from "axios"
const initialState={
    patientData:[],
    status:"idle"
}

const token = localStorage.getItem("token")

export const getPatients=createAsyncThunk("patients/get",async()=>{
    const response=await axios.get("http://localhost:9090/api/lab/view-patient",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    const result=response.data.data
    console.log(result);    
    return result
})
const patientSlice=createSlice({
    name:"patient",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getPatients.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(getPatients.fulfilled,(state,action)=>{
            state.patientData=action.payload
            state.status="success"
        })
        .addCase(getPatients.rejected,(state,action)=>{
            state.status="failed"
        })
    }

})
export default patientSlice.reducer

