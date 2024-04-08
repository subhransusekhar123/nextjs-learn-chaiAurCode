
import mongoose from 'mongoose';

export const connect = async() => {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected. ')
        })

        connection.on('error',(error)=>{
            console.log("Mongodb connection error !! please make sure db is up and running ." + error)
            process.exit()
        })
    } catch (error) {
        console.log('Something went wrong in connecting to DB')
        console.log(error)
    }
}