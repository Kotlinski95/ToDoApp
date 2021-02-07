const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//connect to database
mongoose.connect();

let data = [
    {
        item: 'get milk'
    },
    {
        item: 'walk dog'
    },
    {
        item: 'kick some coding ass'
    },
    {
        item: 'go sleep'
    }
];
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    console.log('Hello from todoController');

    app.get('/todo', function(req,res){
        res.render('todo', {todos: data});

    });

    app.post('/todo', urlencodedParser,  function(req,res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req,res){
        data = data.filter(function(todo){
            let output = todo.item.replace(/ /g, '-') !== req.params.item;
            return output;
        });
        res.json(data);
    });
};