var express = require('express');
var app = express();



let port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});