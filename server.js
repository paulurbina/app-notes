const express = require('express')
const path = require('path')
const expHandl = require('express-handlebars')
const morgan = require('morgan')
const methodOverride = require('method-override')

const app = express()

app.set('port', process.env.PORT || 4000)

app.set('views', path.join(__dirname, 'src/views'))
app.engine('.hbs', expHandl({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'src/public')))
app.use(morgan('dev'))
app.use(methodOverride('_method'))

app.use(require('./src/routes/index.routes'))
app.use(require('./src/routes/notes.routes'))

module.exports = app