const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const userRoutes = require('./routes/userRoutes');
const bookRouter = require('./routes/bookRouter')
const error = require('./middleWares/errorMiddleWares')

const app = express();

// environment keys
dotenv.config();
// connecting db
dbConnect(); 

//passing body data
app.use(express.json());

app.use(cors());

//routes
//user routes
app.use('/api/users', userRoutes);
//book routes
app.use('/api/books', bookRouter);

// error middleware handler
app.use(error.errorMiddleware);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is live and running on ${PORT}`);
});

