const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// - name
// - description
// - status: created/done/deleted
// - createTime
//     - string
//     - order
// - Time
//     - string
//     - order

const database = {
    createDB: () => {
        // var fs = require('fs')
        var exists = false;
        // fs.readdir("./", function (err, files) {
        //     files.forEach(function (file) {
        //         if (file == 'db.json') {
        //             exists = true;
        //         }
        //     })
        // })
        if (!db.has('todos').value()) {
            db.defaults({
                todos: []
            }).write()
            console.log("Database created")
        } 
        else {
            console.log("Database exists.")
        }
        // setTimeout(() => {
        //     if (exists) {
        //         console.log("Database exists.")
        //     } else {
        //         // db.get('todos').remove().write()
        //         db.defaults({
        //             todos: []
        //         }).write()
        //         console.log("Database created")
        //     }
        // }, 1000)
    },
    addItem: (name, description) => {
        var id = db.get('todos').size().value()
        if (description == "") {
            description = "No descriptions."
        }
        db.get('todos').push({
            id: id,
            name: name,
            description: description,
            status: "created",
            createTime: {
                string: new Date().toLocaleString(),
                order: new Date().getTime()
            },
            Time: {
                string: "",
                order: 0
            }
        }).write()
    },
    readAllItems: () => {
        return db.get('todos').value()
    },
    readUnfinishedItems: () => {
        return db.get('todos').filter({
            status: 'created'
        }).value()
    },
    itemFinish: (id) => {
        db.get('todos').find({
            id:id
        }).assign({
            status: 'done',
            Time: {
                string: new Date().toLocaleString(),
                order: new Date().getTime()
            }
        }).write()
    },
    itemDelete: (id) => {
        db.get('todos').find({
            id:id
        }).assign({
            status: "deleted",
            Time: {
                string: new Date().toLocaleString(),
                order: new Date().getTime()
            }
        }).write()
    }
}

export default database