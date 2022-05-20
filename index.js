const express = require ('express');
const router = require('./src/routes/userRoute');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;



const app = express();

app.use(express.json());

app.use(cors());

app.use('/user', router);

app.listen(port || 3000, () => {

})