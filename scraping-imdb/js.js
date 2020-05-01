var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('https://www.paodeacucar.com/secoes/C4215/cafes?qt=12&ftr=facetSubShelf_ss:4215_Caf%C3%A9s&p=0&gt=list', function(err, res, body) {
   if (err) console.log('Erro: ' + err);
   
   var $ = cheerio.load(body);

   $('.product-list-wrapper .ng-isolate-scope div').each(function() {

       var produto = $(this).find('.product-card__title').text().trim()

       console.log(produto);
   });
   
});