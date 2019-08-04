module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    app.post('/api/addUser', user.addUser)
    app.put('/api/editUser', user.editUser)
   

}