'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {

    When(/^I add Item to the list to expose XSS vulnerability$/, function (next) {
        this.driver.get('http://localhost:8080');
        this.driver.findElement(By.xpath("//*[contains(text(),'My todolist')]"));



        this.driver.findElement(By.id("newtodo")).sendKeys("<"+"script>"+'alert("XSS")'+"</"+"script>");



        this.driver.findElement(By.xpath("/html/body/form/p/input[2]")).click()
        //this.driver.findElement(By.css('a[href="/todo/delete/0"]')).click();
        //this.driver.findElement(By.xpath("//h3[contains(text(),'Schalk Nolte')]"))
            .then(function(position) {
                next();
            });
    });

    Then(/^Alert must not pop up$/, function (next) {
        this.driver.findElements(By.xpath("//*[contains(text(),'XSS')]"))
        .then(function(elements) {
            expect(elements.length).to.equal(0);
            next();
        });
    });
});