const request = require('request-promise')
const cheerio = require('cheerio')

const URL = ('https://www.paodeacucar.com/')

async function acesso() {
    const response = await request(URL)
    console.log(response)
}
acesso()