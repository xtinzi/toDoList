const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sanitizer = require('sanitizer');
const app = express();

let todolist = [];

/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
    res.render('todo.ejs', { todolist, clickHandler:"func1();" });
})

    .get('/todo/edit/:id', function(req, res) {
        let id = req.params.id;
        let item = todolist[id];
        res.render('edit.ejs', { id, item, clickHandler:"func1();" });
    })

    /* Adding an item to the to do list */
    .post('/todo/edit/', urlencodedParser, function(req, res) {
        let sanatisedstring = sanitizer.sanitize(req.body.edittodo);
        if (req.body.edittodo != '' && req.body.edittodoid != '') {
            todolist[req.body.edittodoid] = req.body.edittodo;
        }
        res.redirect('/todo');
    })

    /* Adding an item to the to do list */
    .post('/todo/add/', urlencodedParser, function(req, res) {
        let sanatisedstring = sanitizer.sanitize(req.body.newtodo);
        if (sanatisedstring != '') {
            todolist.push(sanatisedstring);
        }
        res.redirect('/todo');
    })

    /* Deletes an item from the to do list */
    .get('/todo/delete/:id', function(req, res) {
        if (req.params.id != '') {
            todolist.splice(req.params.id, 1);
        }
        res.redirect('/todo');
    })

    /* Redirects to the to do list if the page requested is not found */
    .use(function(req, res, next){
        res.redirect('/todo');
    })

    .listen(8080);
