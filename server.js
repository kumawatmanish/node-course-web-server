const express = require('express');

const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname +'/public'));

hbs.registerHelper('getCurrentYear', () => {
   return new Date().getFullYear();
});


app.get('/',(req, res) =>{
      res.render('home.hbs',{
          name : "neha",
          pageTitle : "Home Page"
      });
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pageTitle : "About Us",
               
    });
});

app.listen(8888,() => {
    console.log('Server is up on 8888 port');
});