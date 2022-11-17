const mongoose = require('mongoose')


/*
async function connectDB() {
    try {
        await mongoose.connect(db.mongoURI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error)
    }
}*/

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


module.exports = connectDB