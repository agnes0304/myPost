const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

const port = 3000;

const router = require('./router/posts');

app.use('/', router);

app.listen(port, () => {
    console.log(`port number is : ${port}`);
})
