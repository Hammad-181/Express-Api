const express = require ('express');
const router = require('./src/routes/userRoute');

require('dotenv').config();
const port = process.env.PORT;



const app = express();

app.use(express.json());

app.use('/user', router);

app.listen(port || 3000, () => {

})