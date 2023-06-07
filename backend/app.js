const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

const postRouter = require('./router/posts');
const newpostRouter = require('./router/newpost');

app.use('/posts', postRouter);
app.use('/newpost', newpostRouter);


app.listen(port, () => {
    console.log(`port number is : ${port}`);
})
