# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

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
  



#Seting ip tests:
 npm install mocha chai --save-dev
 npm install request --save-dev
 Add "scripts": {"test": "mocha"} to package.json
 npm install --save-dev grunt-cucumber-coverage



### Tests
you'll need Chrome (or Chromium) installed, and you'll also need the Chromedriver executable available on your path. You can get Chromedriver from [here](http://chromedriver.storage.googleapis.com/index.html) and then, in Linux, you can add the directory to your path like this:

    export PATH=$PATH:~/path/to/directory/containing/chromedriver
    OR create a symlink if this gives you problems: ln -s ~/path/to/directory/containing/chromedriver chromedriver
    
    

Verify it is working by typing 'chromedriver' in the terminal. You should see:

    [me@computer ~]$ chromedriver 
    Starting ChromeDriver (v2.10) on port 9515
    Only local connections are allowed.

then:
    npm install
    npm install --save-dev grunt-cucumber-coverage
    npm test
#Docker
To deploy the on Docker:
make sure you have Docker installed
then:	sudo docker build -t todo_docker .
	sudo docker run -it todo_docker bin/bash

get your VM's ip address: ip adress
	npm start

now go to $ip_adress:8080/todo

now you just need your VM's ip address

![image1](https://user-images.githubusercontent.com/7296111/34256731-6ce7c200-e65f-11e7-9366-1248ce4e27f6.png)

![image2](https://user-images.githubusercontent.com/7296111/34256732-6d0f1332-e65f-11e7-9296-d8cd1fa64c91.png)

![image3](https://user-images.githubusercontent.com/7296111/34256733-6d38d69a-e65f-11e7-9a1b-ad36d5941acb.png)

![image4](https://user-images.githubusercontent.com/7296111/34256734-6d63fdca-e65f-11e7-9f1d-20ca5086a406.png)







