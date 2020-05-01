var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('https://www.paodeacucar.com/busca?w=coca-cola&qt=12&p=1&gt=list', function(err, res, body) {
   if (err) console.log('Erro: ' + err);
   console.log(body)
   var $ = cheerio.load(body);

   $('infinite-scroll div').each(function() {
       var title = $(this).find('.container-card__body a p').text().trim();
    //    var rating = $(this).find('.imdbRating strong').text().trim();

       console.log('Titulo: ' + title);

    //    fs.appendFile('imdb.txt', title + ' ' + rating + '\n', function (err) {
    //        if (err) throw err;
    //        console.log('Arquivo salvo com sucesso!');
    //    });
   });
});