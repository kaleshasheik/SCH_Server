module.exports = (app) => {
    const staff = require('../controllers/staff.controller.js');

    app.post('/api/addStaff', staff.addStaff)
    app.post('/api/editStaff', staff.editStaff)


}