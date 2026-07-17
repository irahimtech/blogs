import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/BlogRoutes.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("API is Working."));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;

// Database connect karne aur server start karne ka sahi tareeqa
const startServer = async () => {
  try {
    // Pehle database connect hoga
    await connectDB();
    console.log("Database connected successfully");

    // Database connect hone ke BAAD server listen karega
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    
    // Agar DB connect na bhi ho, tab bhi server ko crash hone se bachane ke liye listen karwa lein
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (Database Error)`);
    });
  }
};

// Function ko call karein
startServer();

export default app;
