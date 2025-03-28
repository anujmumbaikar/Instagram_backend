import mongoose from "mongoose"
import {DB_NAME} from '../constants.ts'
const connectDB = async ():Promise<void> => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host} successfully`)
    } catch (error) {
        console.log(`Error: ${error}`)
        process.exit(1)
    }
}
export {connectDB}