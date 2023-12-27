import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./components/homepage/Homepage";
import Header from "./components/header/Header";
import PatientRegistration from "./components/patientReristration/PatientRegistration";
import PatientInfo from "./components/patientInfo/PatientInfo";
import AdminPatient from "./components/adminPatient/AdminPatient";
import EditPatient from "./components/editPatient/EditPatient";
import LoginRegistration from "./components/LoginRegistration/LoginRegistration";
import Result from "./components/result/Result";
import Login from "./components/LoginRegistration/Login";
import StaffRegistration from "./components/staffRegistration/StaffRegistration";
import AdminForm from "./components/adminForm/AdminForm";
import BloodTest from "./components/pages/BloodTest";
import FullBodyTest from "./components/pages/FullBodyTest";
import LeverFunctionTest from "./components/pages/LeverFunctionTest";
import Profile from "./components/profile/Profile";
import StaffInfo from "./components/staffInfo/StaffInfo";
import Demo from "./components/demo/Demo";
import BookingForm from "./components/bookings/BookingForm";
import AdminPatientBooking from "./components/adminPatient/AdminPatientBooking";
import EditBooking from "./components/bookings/EditBooking";
import StaffPatientBooking from "./components/staffpatient/StaffPatientBooking";
import EditAdminPatient from "./components/adminPatient/EditAdminPatient";
import EditAdminStaff from "./components/adminPatient/EditAdminStaff";
import SpecificTest from "./components/bookings/SpecificTest";
import Footer from "./components/footer/Footer";
import AdminTest from "./components/adminTest/AdminTest";
import EditAdminTest from "./components/adminTest/EditAdminTest";
import UpdateResult from "./components/result/UpdateResult";
import PatientResult from "./components/result/PatientResult";
import SnowFall from "./components/snowFall/SnowFall";
import UpdateResultForm from "./components/result/UpdateResultForm";
import EditProfile from "./components/profile/EditProfile";
import EditPatientProfile from "./components/profile/EditPatientProfile";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/p-registration" element={<PatientRegistration />} />
          <Route path="/p-info" element={<PatientInfo />} />
          <Route path="/s-info" element={<StaffInfo />} />
          <Route path="/admpatient" element={<AdminPatient />} />
          <Route path="/p-edit/:id" element={<EditPatient />} />
          <Route path="/p-admedit/:id" element={<EditAdminPatient />} />
          <Route path="/s-admedit/:id" element={<EditAdminStaff />} />
          <Route path="/registration" element={<LoginRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="/staff" element={<StaffRegistration />} />
          <Route path="/admin" element={<AdminForm />} />
          <Route path="/blood/:test" element={<BloodTest />} />
          <Route path="/full-body/:test" element={<FullBodyTest />} />
          <Route path="/lft/:test" element={<LeverFunctionTest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/specific-test/:test" element={<SpecificTest />} />
          <Route path="/admbooking" element={<AdminPatientBooking />} />
          <Route path="/stfbooking" element={<StaffPatientBooking />} />
          <Route path="/edit-booking/:id" element={<EditBooking />} />
          <Route path="/admtest" element={<AdminTest />} />
          <Route path="/edit-admtest" element={<EditAdminTest />} />
          <Route path="/edit-result/:id" element={<UpdateResult />} />
          <Route path="/edit-resultform/:id" element={<UpdateResultForm />} />
          <Route path="/p-id" element={<PatientResult />} />
          <Route path="/snow" element={<SnowFall />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
          <Route path="/edit-patient-profile/:id" element={<EditPatientProfile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
