import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    patientData:[],
    status:"idle"
}

export const addPatients=createAsyncThunk("patients/get",async(patient)=>{
    const response=await axios.post("http://localhost:9090/api/patient-booking/add-patient",patient,{

    })
    const result=response.data.data
console.log(result);
return result
})

const patientAddSlice=createSlice({
    name:"addpatient",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(addPatients.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(addPatients.fulfilled,(state,action)=>{
            state.status="success"
        })
        .addCase(addPatients.rejected,(state,action)=>{
            state.status="failed"
        })
    }
})
export default patientAddSlice.reducer


