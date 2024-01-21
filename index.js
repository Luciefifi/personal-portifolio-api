import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import dbConn from './db.js';
import blogRoute from './src/routes/blogRoute.js'
import userRoute from './src/routes/userRoute.js';
import messageRoute from './src/routes/messageRoute.js';
import cors from 'cors'
import passport from 'passport';
import authRoute from './src/routes/authRoute.js'
import session from 'express-session';
import swaggerUi from "swagger-ui-express";
import documentations from './src/apiDocs/swagger.js';


import './src/service/passport.js'
dotenv.config();
const app = express();


const PORT =  process.env.PORT||3000
dbConn()
app.use(cors());
app.use(express.json())

app.use(session({
  secret: 'Lavender',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// require('./routes/authRoutes')(app);

  
app.listen(PORT,()=>{
    console.log(`Server Started at :${PORT}`)
})

app.use("/docs" ,swaggerUi.serve)
app.use("/docs" ,swaggerUi.setup(documentations))
app.use('/api', blogRoute)
app.use('/api',userRoute)
app.use('/api',messageRoute)
authRoute(app);
