const mongoose = require('mongoose')
const { genSalt, hash } = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password)
    throw Error('Missing fields, all fields must be filled!')
  if (!validator.isEmail(email)) throw Error('Invalid email!')
  if (!validator.isStrongPassword(password))
    throw Error('Password not strong enough!')

  const exists = await this.findOne({ email })

  if (exists) throw Error('Email is already in use.')

  const salt = await genSalt(10)
  const hashed = await hash(password, salt)

  const user = await this.create({
    email,
    password: hashed,
  })

  return user
}

module.exports = mongoose.model('User', userSchema)
