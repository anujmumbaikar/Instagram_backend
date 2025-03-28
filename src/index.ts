import express from 'express';
import dotenv from 'dotenv';
import { app } from './app.ts';
dotenv.config({ path: './.env' });



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
