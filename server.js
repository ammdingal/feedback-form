let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

app.post('/', function(req, res){
    const name = req.body.name;
    const course = req.body.course;
    const score = req.body.score;
    const reason = req.body.reason;
    const data = {name, course, score, reason};

    // Emit a socket event with the data
    io.emit('result', data);

    // Send a response to the client
    res.sendStatus(200);
});

app.listen(8000, function(req, res){
    console.log('listening on port 8000');
})