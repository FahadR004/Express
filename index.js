const express = require('express');
const cors = require('cors');  
const userRoutes = require('./routes/userRoutes');
const routeRoutes = require('./routes/routeRoutes');

const app = express();
const port = 3000;

// Configure CORS to allow requests from your frontend origin
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Use routes
app.use('/', userRoutes);
app.use('/', routeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
