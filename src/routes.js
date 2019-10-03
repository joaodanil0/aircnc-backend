const express = require('express');

const routes = express();

routes.post('/users', (req, res) => {
    return res.send(req.body);
});

module.exports = routes;