const express = require('express');
const path = require('path');



const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(requisicao, resposta) {
  resposta.sendFile(path.join(__dirname, '/index.html'));
});
app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('Server started at http://localhost:' + port);