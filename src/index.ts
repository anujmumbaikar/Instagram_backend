import express from 'express';
import dotenv from 'dotenv';
import { app } from './app.ts';
import { connectDB } from './db/index.ts';
dotenv.config({ path: './.env' });

connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log(`Error: ${error}`);
    process.exit(1);
});

