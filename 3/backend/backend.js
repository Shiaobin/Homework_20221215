const fs = require('fs').promises
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/course', async function (req, res) {
    const courseList = await fs.readFile('./data/course_list.json')
    res.json(JSON.parse(courseList))
})

app.listen(3000)