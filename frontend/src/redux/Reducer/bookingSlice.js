import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    bookingData:[],
    status:"idle"
}
// const token = localStorage.getItem("token")

export const getBookings=createAsyncThunk("bookings/get",async()=>{
    const response=await axios.get("http://localhost:9090/api/patient-booking/view-patient",{
        // headers:{
        //     Authorization:`Bearer ${token}`
        // }
    })
    const result=response.data.data
console.log(result);
return result
})
const bookingSlice=createSlice({
    name:"booking",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getBookings.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(getBookings.fulfilled,(state,action)=>{
            state.bookingData=action.payload
            state.status="success"
        })
        .addCase(getBookings.rejected,(state,action)=>{
            state.status="failed"
        })
    }
})

export default bookingSlice.reducer
