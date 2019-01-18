var express = require('express')
var app = express();
var request = require('request');

app.set("view engine", 'ejs')



app.get('/results', function(req, res) {

  request('http://www.omdbapi.com/?s=chicago&apikey=thewdb', function(error, response, body){
    if(!error && response.statusCode == 200) {
      var parsedData = JSON.parse(body)
        // res.send(parsedData['Search'][0].Title)
      res.render("results", {results: parsedData})
    }
  } )
  //
})

app.listen(3000, (req,res) => {
  console.log("Movie App Has Started... ")
})
