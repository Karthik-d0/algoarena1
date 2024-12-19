import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import authRoute from './routes/loginRoutes.js';



import roomRoute from './routes/roomRoutes.js';
import cors from 'cors'; // Import the CORS middleware

const app = express();

// Enable CORS for all routes
app.use(cors());

// Or, if you want to allow only your frontend's specific origin:
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
}));
    app.use(express.json());
    app.get('/' , (request , response) =>{
        console.log(request)
        return response.status(234).send('Welcome to the site ..server connected');
    } );
    
app.use('/api/auth', authRoute); // Add auth routes
app.use('/api/rooms', roomRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to data base');
        app.listen(PORT ,() => {
            console.log(`App is listining to port : ${PORT}`);
        });
    })
    .catch((error) =>{
        console.log(error);
    });

