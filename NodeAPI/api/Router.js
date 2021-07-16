module.exports = function (app) {
    var userController = require('./controler/userControler');
    var deviceController = require('./controler/deviceController');
    var listController = require('./controler/listController')
    app.route('/login')
        .get(userController.login)
        .post(userController.register);
    app.route('/logout')
        .get(userController.logout);
    app.route('/user')
        .post(listController.addDeviceToUser)
        .put(userController.update)
        .delete(userController.delete);
    app.route('/device')
        .get(deviceController.details)
        .post(deviceController.create)
        .put(deviceController.update)
        .delete(deviceController.delete);
    

}