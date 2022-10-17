import express from 'express'

const app = express()

import connection from './connection.js'




import List from './models/List.js'


app.listen(3000, () => console.log('app listening on port 3000'))

app.get('/', function(req, res) {
    res.send('New Thing!')
})

app.get('/list', (req, res) => {
    List.find({}).then(lists => res.json(lists))
})
