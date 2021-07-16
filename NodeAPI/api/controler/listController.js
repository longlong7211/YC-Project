require('../../CustomModule/checktoken')
var list = require('../../models/listModel')
module.exports = {
    addDeviceToUser: (res, req) => {
        let user = req.body.user;
        let device = req.body.device;
        if (CheckToken()) {
            list.userID = user;
            list.deviceID = device;
            list.findOne({ userID: user }, (err, resp) => {
                if (resp.userID == user && resp.deviceID == device) {
                    console.log(`Thiết bị ${device} và user ${user} đã được liên kết`);
                    res.json({ res: '-1' });
                } else {
                    list.save((err, req) => {
                        if (!err) {
                            console.log(`Thiết bị ${device} được thêm vào user ${user}`);
                            res.json({ res: '1' });
                        } else {
                            console.log(`Thiết bị ${device} không thêm được vào user ${user}`);
                            res.json({ res: '0' });
                        }
                    });
                }
            });

        }
    }
}