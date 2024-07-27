require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Configure CORS options
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  // allowedHeaders: 'Content-Type,Authorization', // Allow necessary headers
};

app.use(cors(corsOptions));

// ---------------------------------------------------------------------------

const auth = require('./router/authRouter');
app.use('/api/auth', auth);


// ----------------------------------------------------------------------------


// Connect to MongoDB
mongoose.connect(MONGODB_URI)

  .then(
    () => {
      console.log('Connected to MongoDB');

      app.get('/', (req, res) => {
        res.send('Server started')
      })

      app.listen(PORT, () => {
        console.log(`server is running at port ${PORT}`);
      })
    }
  ).catch(
    (err) => {
      console.error('Error connecting to MongoDB:', err.message);
    }
  );

