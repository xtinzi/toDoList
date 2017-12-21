# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`
- run `npm install sanitizer`


### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
Explain what you have done here and why...

#4 Add view for edit page, add get method to handle passing of todoitem id and what the item is, add post method to handle submission of edited item.
  .get('/todo/edit/:id', function(req, res) {
      let id = req.params.id;
      let item = todolist[id];
      res.render('edit.ejs', { id, item, clickHandler:"func1();" });
  })
  
  
  This method adds a get request to the app that takes id as a parameter.
  This renders the todo/edit page and fetches item at index id. This (current) item is showed in the todo/edit view along with an input for the edit text.
  
  .post('/todo/edit/', urlencodedParser, function(req, res) { 
      let sanatisedstring = sanitizer.sanitize(req.body.edittodo);
      if (req.body.edittodo != '' && req.body.edittodoid != '') {
         todolist[req.body.edittodoid] = req.body.edittodo;
      }
      res.redirect('/todo');
  })
  
  This method adds a post request to the app that has an item id in a hidden input.
  This method takes the string inserted into the input, sanatizes it and then updates item at index id to the newly entered string.


# Tests
Tests were done with cucumber and the selenium webdriver.

ALL TEST CASES WRITTEN WITH ASSUMPTION THAT THE LIST IS EMPTY SO PLEASE DELETE AND ITEMS ON THE LIST BEFORE RUNNNING TESTS.

you'll need Chrome (or Chromium) installed, and you'll also need the Chromedriver executable available on your path. You can get Chromedriver from [here](http://chromedriver.storage.googleapis.com/index.html) and then, in Linux, you can add the directory to your path like this:

    export PATH=$PATH:~/path/to/directory/containing/chromedriver
    OR create a symlink if this gives you problems: ln -s ~/path/to/directory/containing/chromedriver chromedriver
    
    

Verify it is working by typing 'chromedriver' in the terminal. You should see:

    [me@computer ~]$ chromedriver 
    Starting ChromeDriver (v2.10) on port 9515
    Only local connections are allowed.

then:
    npm install
    npm install sanitizer
    npm install --save-dev grunt-cucumber-coverage
    npm test
    
 this article explains how coverage was added to the tests: https://www.npmjs.com/package/grunt-cucumber-coverage

#Docker
To deploy the on Docker:
make sure you have Docker installed
then:	sudo docker build -t todo_docker .
	sudo docker run -it todo_docker bin/bash

get your VM's ip address: ip adress
	npm start

now go to $ip_adress:8080/todo

now you just need your VM's ip address

#XSS
Testing for XSS:
using basic html tags we can test for a basic XSS vulnerability:

Try changing the font colour to red using <font color="blue">


![image1](https://user-images.githubusercontent.com/7296111/34256731-6ce7c200-e65f-11e7-9366-1248ce4e27f6.png)


As seen on the diagram below, this works, meaning you can insert the tag into the script


![image2](https://user-images.githubusercontent.com/7296111/34256732-6d0f1332-e65f-11e7-9296-d8cd1fa64c91.png)

Now try the <script> tag which can be used for XSS attacks


![image3](https://user-images.githubusercontent.com/7296111/34256733-6d38d69a-e65f-11e7-9a1b-ad36d5941acb.png)

This shows that there is a crosssite vulnerability on our form

![image4](https://user-images.githubusercontent.com/7296111/34256734-6d63fdca-e65f-11e7-9f1d-20ca5086a406.png)


The solution to fixing this was to add a sanitizer, where my vulnerable string is:

before using sanitizer on add funtion:

/* Adding an item to the to do list */
.post('/todo/edit/', urlencodedParser, function(req, res) {
    console.log(req.body.edittodoid);
    if (req.body.edittodo != '' && req.body.edittodoid != '') {
        todolist[req.body.edittodoid] = req.body.edittodo;
    }
    res.redirect('/todo');
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})


after using sanitizer on add function:

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
    
we used: `npm install sanitizer` to install the sanitizer
 






