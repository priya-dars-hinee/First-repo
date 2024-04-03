const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
const port = process.env.PORT
const notfound = require('./middleware/not-found')
const router = require('./routes/routes')
const errorHandlermId=require('./middleware/error-handler')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connection successfull...."))
    .catch((err) => console.log(err))
    ;

app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.use(express.json())
app.use('/static', express.static('static'))
app.use('/api/v1/user', router)
app.use(notfound)
app.use(errorHandlermId)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))