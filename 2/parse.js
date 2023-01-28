import { Parser } from '@json2csv/plainjs'
import { readFile, writeFile } from 'fs/promises'

(async function () {
    try {
        const rawData = await readFile('./data/raw_data.json')
        const rawJSON = JSON.parse(rawData)
        const students = Object.keys(rawJSON)
        const cleanData = []
        students.forEach(function (student) {
            cleanData.push({
                "id": rawJSON[student].id,
                "name": student,
                "chinese": parseInt(rawJSON[student].transcript.find(function (transcript) {
                    return transcript.subject === 'chinese'
                }).score),
                "english": parseInt(rawJSON[student].transcript.find(function (transcript) {
                    return transcript.subject === 'english'
                }).score),
                "math": parseInt(rawJSON[student].transcript.find(function (transcript) {
                    return transcript.subject === 'math'
                }).score),
                "social": parseInt(rawJSON[student].transcript.find(function (transcript) {
                    return transcript.subject === 'social'
                }).score),
                "science": parseInt(rawJSON[student].transcript.find(function (transcript) {
                    return transcript.subject === 'science'
                }).score)
            })
        })
        cleanData.sort(function (a, b) {
            return a.id.localeCompare(b.id)
        })
        const parser = new Parser()
        const csv = parser.parse(cleanData)
        await writeFile('./data/clean_data.csv', csv)
    } catch (err) {
        console.error(err)
    }
}())
