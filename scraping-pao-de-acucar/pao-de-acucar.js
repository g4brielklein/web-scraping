var request = require('request')
var cheerio = require('cheerio');

request({
    url: 'https://www.paodeacucar.com/secoes/C4223/cafes?qt=12&ftr=facetSubShelf_ss:4223_Caf%C3%A9s&p=0&gt=list',
    gzip: true
},  function (error, reponse, body) {
    if (error) throw new Error(error);

    var $ = cheerio.load(body);

    $('div.product-list-wrapper > infinite-scroll.ng-isolate-scope div.ng-scope').each(function() {
        var product = $(this).find('.container-card__body > a > product-description ng-binding').text().trim();
        var price = $(this).find('.container-card__body > p.normal_price ng-binding ng-scope').text().trim();
 
        console.log('Produto: ' + product + ' Preço: ' + price + '\n');
 
         fs.appendFile('produtos-pao-de-acucar.txt', product + ' ' + preco + '\n', function (err) {
            if (err) throw err;
            console.log('Arquivo salvo com sucesso!');
        });
    });
});
