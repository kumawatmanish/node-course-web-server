const express = require('express');

const hbs = require('hbs');

const port = process.env.PORT || 8888;
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

app.listen(port,() => {
    console.log(`Server is upon ${port}`);
});