const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema(
  {
      id: Number,
      name: String,
      data: Number  
    },
    { strict: false}
)

module.exports = mongoose.model('cities', CitySchema)

