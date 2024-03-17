const jwt = require('jsonwebtoken')

const generateJWT = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15d'})

    return res.cookie('jwt', token)
}

module.exports = generateJWT