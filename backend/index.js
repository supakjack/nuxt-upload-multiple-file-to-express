const express = require('express')
const createError = require('http-errors')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())

const uploadRoute = require('./routes/upload.router')

app.use('/upload', uploadRoute)

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
