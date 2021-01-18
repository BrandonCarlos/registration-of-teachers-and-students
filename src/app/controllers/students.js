const { age, graduation, date } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        return res.render('students/index', { students: data.students })
    },
    create(req, res) {
        return res.render('students/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '')
                return res.send('Por favor, preencha todos os campos.')
        }
    },
    show(req, res) {
        const { id } = req.params
        const foundStudent = data.students.find(function (student) {
            return student.id == id
        })

        if (!foundStudent) return res.send('Professor não encontrado!')
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        return
    },
    delete(req, res) {
        return
    }
}
