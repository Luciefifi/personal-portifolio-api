import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()
const databaseurl = process.env.DATABASE_URL

const dbConn=async () => {

    try{
        await mongoose.connect(databaseurl,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('database connected')

    }catch(err){
        console.log(err.message)
    }
}

export default dbConn;