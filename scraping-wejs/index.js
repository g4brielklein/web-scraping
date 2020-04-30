var cheerio = require('cheerio');
var request = require('request');

request({
    url: 'https://www.wejs.org',
    gzip: true
}, function (error, response, body) {
    if (error) throw new Error(error);
    
    var $ = cheerio.load(body);

    var descricao = $('div.jumbotron-inverted > div > p:not(.lead)').text();

    console.log('A descricão do we.js é: '+descricao);
})