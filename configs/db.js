import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]); 

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected Successfully."));
        
        // Agar aapke cluster ka naam '.xgjikoi.mongodb.net/' par khatam ho raha hai,
        // toh aap direct process.env.MONGODB_URI ko connect karein, end mein extra slash lagane ki zaroorat nahi.
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("Database Connection Error: ", error.message);
    }
}

export default connectDB;
