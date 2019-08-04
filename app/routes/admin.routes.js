module.exports = (app) => {
    const admin = require('../controllers/admin.controller.js');

    app.post('/api/addAcademicYear', admin.addAcademicYear)
    app.post('/api/editAcademicYear', admin.editAcademicYear)
    app.post('/api/addCaste', admin.addCaste)
    app.post('/api/editCaste', admin.editCaste)
    app.post('/api/addCategory', admin.addCategory)
    app.post('/api/editCategory', admin.editCategory)
    app.post('/api/addClass', admin.addClass)
    app.post('/api/editClass', admin.editClass)
    app.post('/api/addMedium', admin.addMedium)
    app.post('/api/editMedium', admin.editMedium)
    app.post('/api/addReligion', admin.addReligion)
    app.post('/api/editReligion', admin.editReligion)
    app.post('/api/addSection', admin.addSection)
    app.post('/api/editSection', admin.editSection)
    app.post('/api/addSubject', admin.addSubject) 
    app.post('/api/editSubject', admin.editSubject)
    app.post('/api/addSubjectType', admin.addSubjectType)
    app.post('/api/editSubjectType', admin.editSubjectType)


}