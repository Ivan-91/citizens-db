const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        id: Number,
        name: String,
        city_id: Number,
        groups: Array   
      },
      { strict: false}
)

module.exports = mongoose.model('citizens', UserSchema)


