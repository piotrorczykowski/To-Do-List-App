class todoActions {
    test(req, res) {
        res.send('oK!')
    }
}

module.exports = new todoActions()