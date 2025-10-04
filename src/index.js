const PORT = require('./configlayer/config').PORT;
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./configlayer/databaseconfig');
const apirouter = require('./routes/api/apiroutes');

app.use(cors(
   {
    origin:['http://localhost:3001'],
    credentials:true,
   }
));
app.get('/', (req, res) => {
    res.send('<h1><center>server is running....</center></h1>')
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',apirouter);
app.listen(PORT, async() => {
   await connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
});


