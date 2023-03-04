const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 5000;
app.use(express.json())
// available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})


