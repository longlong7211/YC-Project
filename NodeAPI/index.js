require('./models/db')
const CT = require('./CustomModule/checktoken')
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const usercontrol = require('./api/controler/userControler')
var routes = require('./api/Router');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    var token = req.headers.jwt;
    if (CT.CheckToken(req.body.user, token)) {
        next();
    } else {
        if (req.url == '/login') {
            console.log('user đăng nhập hoặc đăng ký bỏ qua token');
            next();
        } else {
            console.log('Không có token hoặc token không đúng');
            res.status(404).send({ url: req.url + ' not found' });
        }
    }

});
routes(app);


app.listen(3000, () => {
    console.log("Server listen at port 3000");
});