module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    app.post('/api/addUser', user.addUser)
    app.put('/api/editUser', user.editUser)
    app.get('/api/fetchUsers', user.getAllUsers)
    app.get('/api/fetchuserTypes', user.getAllUsersTypes)

}