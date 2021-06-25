const express = require('express');
const cors = require('cors');
const  app = express();
const connectDB = require('./config/db');

connectDB();
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req,res) => res.json({msg: 'hola hermesN'}) )

app.use('/api/v1/group', require('./routes/Group.routes'));
app.use('/api/v1/Data', require('./routes/DataGroup.route'));

const PORT = 5000;

app.listen(PORT, () => console.log('server is runnig'));