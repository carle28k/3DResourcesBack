const express = require (`express`)
const cors = require(`cors`);
require('dotenv').config()
const { connect } = require("./helpers/dbConnect");

const port = process.env.PORT || 3000;


const app = express();
//Para poder leer archivos JSON
app.use(express.json());

app.use(express.urlencoded({ extended: false }))

app.use(cors())

/* connect() */

/* RUTAS */
app.use(`/api/v1`, require(`./routers/softwareRouters`))
//app.use(`/login`, require(`./routers/authRouters`))

app.listen(port, ()=>{
    console.log(`server on port ${port}`)
})