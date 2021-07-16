const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userModel');
module.exports = {
    CheckToken: async(user, token) => {
        if (user == null || token == null) {
            return false;
        }
        // console.log(`${user}-${token}`);
        await User.findOne({ username: user }, (err, res) => {
            if (!err) {
                if (res.token == token) {
                    return true;
                }
            }
        });
        return false;
    }
}
