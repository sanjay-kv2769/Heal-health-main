import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "../Reducer/patientSlice";
import bookingSlice from "../Reducer/bookingSlice";
import patientAddSlice from "../Reducer/patientAddSlice";


export default configureStore({
    reducer: {
      patient:patientSlice,
      booking:bookingSlice,
      addpatient:patientAddSlice
    },
  });