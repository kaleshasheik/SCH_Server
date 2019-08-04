module.exports = (app) => {
    const student = require('../controllers/student.controller.js');

    app.post('/api/addStudent', student.addStudent)
    app.put('/api/editStudent', student.editStudent)
    app.get('/api/addPreAdmissionDetails', student.addPreAdmissionDetails)
    app.get('/api/editPreAdmissionDetails', student.editPreAdmissionDetails)
    app.post('/api/addPreInstitutionDetails', student.addPreInstitutionDetails)
    app.put('/api/editPreInstitutionDetails', student.editPreInstitutionDetails)
    app.get('/api/addAdmissionDetails', student.addAdmissionDetails)
    app.get('/api/editAdmissionDetails', student.editAdmissionDetails)


}