var expect  = require('chai').expect;
var request = require('request');

it('Todo page', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(whatever).to.equal('My todolist');
        done();
    });
});
