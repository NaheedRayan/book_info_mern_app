const express = require('express');
const cors = require('cors');

const app = express();

const books = require('./routes/api/books');
app.use('/api/v1/books', books); // adding version info is a good practice


// Connect Database
const connectDB = require('./config/db');
connectDB();

// some addition settings
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));



app.get('/', (req, res) => {
    res.send('Hello from ExpressJS and MongoDB!')
    console.log("A request has been made to the main route '/'")
});


// port number
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
