const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    const user = await User.findOne({ email })
    if (!user) {
        return done(null, false, { message: 'Not user found!'})
    }
    const match = await user.matchPassw(password)
    if (match) {
        return done(null, user)
    } else {
        return done(null, false, { mesasge: 'Incorrect password!' })
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser( async (id, done) => {
    await User.findById(id, (err, user) => {
        done(err, user)
    })
})