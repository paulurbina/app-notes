const index = {} || null

index.renderIndex = (req, res) => {
    res.render('index')
}

index.renderAbout = (req, res) => {
    res.render('about')
}

module.exports = index