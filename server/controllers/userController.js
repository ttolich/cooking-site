const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Saved} = require('../models/models')

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userController {
    async registration(req, res, next) {
        const {email, password} = req.body
        console.log('17')
        if (!email || !password) {
            console.log('18')
            return next(ApiError.badRequest("Incorrect email or password!"))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            console.log('23')
            return next(ApiError.badRequest("User exists!"))
        }
        console.log('26')
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword})
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest("No user!"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest("Incorrect password!"))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({token})
    }
}

module.exports = new userController()
