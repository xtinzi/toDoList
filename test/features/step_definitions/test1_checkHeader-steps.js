'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {

  When(/^Check if page loads by looking for "([^"]*)"$/, function (searchQuery, next) {
    this.driver.get('http://localhost:8080');
    this.driver.findElement(By.xpath("//*[contains(text(),'My todolist')]"))
        .then(function() {
          next();
        });
  });

  Then(/^The header should appear$/, function (next) {
     // this.driver.findElements(By.css("section#non-executive-team div.team_column"))
      //this.driver.findElements(By.xpath("//h1[contains(text(),'My todolist')]"))
      this.driver.findElements(By.css("h1:first-of-type"))
      .then(function(elements) {
        expect(elements.length).to.equal(1);
        next();
      });
  });

});
