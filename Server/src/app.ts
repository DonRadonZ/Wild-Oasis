import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.use(express.json());

const mongoURI: string | undefined = process.env.MONGOURI?.replace('<PASSWORD>', process.env.DATABASE_PASSWORD || '');

if (!mongoURI) {
    throw new Error("MongoURI is not defined in the environment variables");
}

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err: Error) => console.error("Failed to Connect to MongoDB: ", err))

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})