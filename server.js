// check port 27017
// lsof -iTCP -sTCP:LISTEN | grep mongo 

const express = require('express');
const cors = require('cors');
const db = require('./app/models');

const app = express();

const corsOptions = {
    origin: "*"
}

// register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// koneksi ke database
db.mongoose.connect(db.url, mongooseConfig)
.then(() => {
    console.log('Database connected')
})
.catch(err => {
    console.log('Cannot connect to database', err)
    process.exit();
});

// membuat routes
// app.get('/', (req, res) => {
//     res.json({message: 'Hello from server.js untuk membuat routes'})
// })

// memanggil routes pegawai
require('./app/routes/pegawai.routes')(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))