var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000);

app.use(express.static('public'));

var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
app.get('/', function(req, res){
  res.render('homepage', {mang: mang});
});

app.get('/add', function(req, res){
  res.render('add');
});

app.get('/sua/:index', function(req, res){
  var index = req.params.index;
  res.render('edit', {bird: mang[index], ind : index});
});



app.post('/upload', parser, function(req, res){
  var ten = req.body.ten;
  var hinh = req.body.hinh;
  var gia = req.body.gia;
  mang.push(new Bird(ten, hinh, gia));
  res.redirect('/');
});

app.post('/edit', parser, function(req, res){
  var index = req.body.ind;
  var ten = req.body.ten;
  var hinh = req.body.hinh;
  var gia = req.body.gia;

  // var bird = new Bird(ten, hinh, gia);
  // mang[index] = bird;

  var bird = mang[index];
  bird.ten = ten;
  bird.hinh = hinh;
  bird.gia = gia;

  res.redirect('/');
});

function Bird(ten, hinh, gia){
  this.ten = ten;
  this.hinh = hinh;
  this.gia = gia;
}

var mang = [new Bird('Xanh', '2.png', 100000),
            new Bird('Đen', '3.png', 190000),
            new Bird('Trắng', '4.png', 140000)];
