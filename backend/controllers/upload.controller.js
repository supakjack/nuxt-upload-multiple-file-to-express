const createError = require('http-errors')
const axios = require('axios')

module.exports = {
  create: async (req, res, next) => {
    try {
      const allData = req.body
      const allFile = req.files

      const doesCreate = { allData, allFile }

      res.status(200).send({ doesCreate })
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError())
      next(error)
    }
  },
  log: async (req, res, next) => {
    try {
      const doesLog = 'log from back end'

      res.status(200).send({ doesLog })
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError())
      next(error)
    }
  }
}
