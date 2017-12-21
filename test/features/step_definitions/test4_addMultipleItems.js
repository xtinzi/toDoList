'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {

    When(/^I add multiple Item to the list$/, function (next) {
        this.driver.get('http://localhost:8080');
        this.driver.findElement(By.xpath("//*[contains(text(),'My todolist')]"));
        this.driver.findElement(By.id("newtodo")).sendKeys("Item 1");
        this.driver.findElement(By.xpath("/html/body/form/p/input[2]")).click();
        this.driver.findElement(By.id("newtodo")).sendKeys("Item 2");
        this.driver.findElement(By.xpath("/html/body/form/p/input[2]")).click();
        this.driver.findElement(By.id("newtodo")).sendKeys("Item 3");
        this.driver.findElement(By.xpath("/html/body/form/p/input[2]")).click()

        //this.driver.findElement(By.css('a[href="/todo/delete/0"]')).click();
        //this.driver.findElement(By.xpath("//h3[contains(text(),'Schalk Nolte')]"))
            .then(function(position) {
                next();
            });
    });
    Then(/^Multiple items should be added to list$/, function (next) {
        this.driver.findElements(By.xpath("//*[contains(text(),'Item')]"))
        .then(function(elements) {
            expect(elements.length).to.greaterThan(1);
            next();
        });
    });
});