var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs');

request({
    url: 'https://www.chipart.com.br/mouse-98',
    gzip: true
},  function (error, reponse, body) {
    if (error) throw new Error(error);

    var $ = cheerio.load(body);

    $('.products__list').each(function() {
        var product = $(this).find('.product-card__title').text();
 
        console.log('Produto: ' + product);
 
        fs.appendFile('produtos_chipart.txt', product, function (err) {
            if (err) throw err;
            console.log('Arquivo salvo com sucesso!');
        });
    });
});
