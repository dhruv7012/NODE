const express = require('express')
const connectdb = require('./db/connectdb')
const web = require('./routes/web')

const PORT = 5555;

connectdb()
var bodyParser  = require('body-parser');



const app = express();
app.use(express.urlencoded({extended : true}));
app.set('view engine','ejs')
app.use('/',web)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`App is listernign at port ${PORT}`)
});