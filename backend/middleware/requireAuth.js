const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers

  if (!authorization)
    return res.status(401).json({ error: 'Authorization token required' })

  // verify token
  const token = authorization.replace('Bearer ', '')

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await User.findById(_id).select('_id')
    next()
  } catch (error) {
    res.status(401).json({ error: 'Request unauthorized' })
  }
}

module.exports = requireAuth
