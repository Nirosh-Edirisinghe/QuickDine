import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import resturantRouter from "./routes/resturantRoute.js";

const app = express();

// connect to databse
await connectDB();

// Middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use("/api/auth", authRouter)
app.use("/api/resturant", resturantRouter)

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Unhandle Error:", err);
    res.status(500).json({
        message:err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "produnction" ? undefined : err.stack,
    })

})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});