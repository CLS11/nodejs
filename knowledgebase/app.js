const express = require('express');
const path = require('path');

//INIT APP
const app = express();

//LOAD VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


//HOME ROUTE
app.get('/', function(req, res){
	res.render('index', {
		title: 'Hello'
	});
});

//START SERVER
app.listen(3000, function(){
	console.log('Server started on port 3000...');
});
