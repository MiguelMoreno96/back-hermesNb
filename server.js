const express = require('express');
const cors = require('cors');
const  app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req,res) => res.json({msg: 'hola hermesN'}) )

const PORT = 5000;

app.listen(PORT, () => console.log('server is runnig'));