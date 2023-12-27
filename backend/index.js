const express=require ('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const labRouter=require('./routes/Labroutes')
const loginRouter=require("./routes/LoginRouter")
const registerRouter=require("./routes/RegisterRouter")
const StaffRegisterRouter=require('./routes/StaffRegisterRouter')
const AdminRegisterRouter=require('./routes/AdminRegisterRouter')
const ProfileRouter=require("./routes/ProfieRoutes")
const BookingRouter=require("./routes/BookingRoutes")
const StaffProfileRoutes = require('./routes/StaffProfileRoutes')
const testRouter = require('./routes/TestRoutes')

const port=9090

mongoose.connect('mongodb+srv://sandeep:12345@cluster0.osn9pho.mongodb.net/healhealth',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error);
})

app.use(cors())
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/lab',labRouter)
app.use('/api/login',loginRouter)
app.use('/api/registration',registerRouter)
app.use('/api/staffregistration',StaffRegisterRouter)
app.use('/api/adminregistration',AdminRegisterRouter)
app.use('/api/profile',ProfileRouter)
app.use('/api/staff_profile',StaffProfileRoutes)
app.use('/api/patient-booking',BookingRouter)
app.use('/api/test',testRouter)


app.listen(port, ()=>{
    console.log(`Server started on ${port}`)
    }
);