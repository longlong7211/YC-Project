const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

module.exports = {
    login: (req, res) => {
        console.log('Có user đăng nhập');
        let user = req.body.user;
        let pwd = req.body.pwd;
        let token = '';
        console.log(`user: ${user}, pwd: ${pwd}`); // TODO:lên server bỏ log pwd hoặc secret pwd
        User.findOne({ username: user }, (err, resp) => {
            // console.log(resp);
            if (resp.password == pwd) {
                console.log('xác thực thành công');
                token = jwt.sign({ user: user }, 'ycgroup');
                User.updateOne({ username: user }, { token: token }, (err, res) => {
                    if (!err) {
                        console.log(res);
                    }
                });
                res.json({ res: token });
            } else {
                res.json({ res: '0' });
            }
        });
    },
    logout: (req, res) => {
        console.log('user đăng xuất');
        let user = req.body.user;
        let token = req.headers.jwt;
        User.findOne({ username: user }, (err, resp) => {
            if (!err) {
                if (resp.token == token) {
                    User.updateOne({ username: user }, { token: '0' }, (err, res) => {
                        if (!err) {
                            console.log(res);
                        }
                    });
                    res.json({ res: '1' });
                } else {
                    res.json({ res: '0' });
                }
            } else {
                res.json({ res: '0' });
            }
        });
    },
    register: (req, res) => {
        console.log('user đăng ký');
        console.log(req.body);
        User.findOne({ username: req.body.user }, (err, user) => {
            if (user == null) {
                var user = new User();
                user.password = req.body.pwd;
                user.username = req.body.user;
                user.displayName = req.body.name;
                user.address = req.body.address;
                user.phone = req.body.phone;
                user.deviceOwner = '';
                user.token = '';
                user.save((err, doc) => {
                    if (!err) {
                        console.log(`user ${user.username} đăng ký thành công`);
                        res.json({ reg: 'Đăng ký thành công!' });
                    } else {
                        console.log("đăng ký không thành công" + err);
                        res.json({ reg: '0', message: err });
                    }
                });
            } else {
                console.log(`user ${req.body.user} đã được đăng ký`);
                res.json({ reg: '0', message: `Tài khoản ${req.body.user} đã được đăng ký` });
            }
        });
    },
    update: (req, res) => {
        console.log(req.body);
        res.json('update');
    },
    delete: (req, res) => {
        console.log(req.body);
        res.json('delete');
    }
}