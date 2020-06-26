const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

const database = {
    createDB: () => {
        db.get('todos').remove({done: false}).write()
        db.defaults({todos:[]}).write()
        db.get('todos').push({name:'Study', done: false}).write()
        db.get('todos').push({name:'Eat', done: false}).write()
        db.get('todos').push({name:'Sleep', done: false}).write()
        db.get('todos').push({name:'Homework', done: false}).write()
        db.get('todos').push({name:'Exam', done: false}).write()
        console.log("Database")
    },
    readUnfinishedItems: ()=> {
        return db.get('todos').filter({done: false}).value()
    }
}

export default database
