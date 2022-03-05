const express =  require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const logger = require('morgan');


const authRoutes = require("./src/routes/AuthRoute");
const userRoutes = require("./src/routes/UserRoute");


const app = express();
const port = process.env.PORT || 5000;



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//#region ROUTES OF API

/**
 * AUTH ROUTES
 */
app.use('', authRoutes);

/**
 * USERS ROUTES
 */
app.use('/api/v1/users', userRoutes);


//#endregion

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})