const user = {} || null
const User = require('../models/User')

user.renderRegister = (req, res) => {
    res.render('users/register')
}

user.register = async (req, res) => {
    const errors = []
    const { name,
        email,
        password,
        confirm_password, } = req.body

    if (password !== confirm_password) {
        errors.push({text: 'password do no match'})
    }
    if (password.length < 4) {
        errors.push({text: 'password must be at least 4 characters'})
    }

    if (errors.length > 0) {
        res.render('users/register', {errors, name, email })
    }

    if (errors.length === 0) {
        const emailSearch = await User.findOne({ email })
        if (emailSearch) {
            req.flash('error_msg', 'The email is already in use!')
            res.redirect('/users/register')
        } else {
            const newUser = await new User({
                name, email, password })

            newUser.password = await newUser.encrypPassw(password)
            await newUser.save()
            req.flash('success_msg', 'Your is register!')
            res.redirect('/users/login')
        }
    }
}

user.renderLogin = (req, res) => {
    res.render('users/login')
}

user.login = (req, res) => {
    
}

user.logout = (req, res) => {

}

module.exports = user
