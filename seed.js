import mongoose from 'mongoose'
import connection from './connection.js'
import List from './models/List.js'

const listData = [{
    name: "Chris' Todo List",
    items: [
        {
            title: "test db"
            status: "complete",
            deadline: "tonight"
        },
        {
            title: "Go to bed",
            status: "incomplete"
            deadline: "a while ago"
        }
    ]
}]

List
    .deleteMany({})
    .then(() => List.create(listData))
    .then(() => mongoose.disconnect())
    .catch(() => error => console.error("seeding error: ", error))
