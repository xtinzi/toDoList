'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then}) {

    When(/^I edit an item on the list$/, function (next) {
        this.driver.get('http://localhost:8080');
        this.driver.findElement(By.xpath("//*[contains(text(),'My todolist')]"));
        this.driver.findElement(By.id("newtodo")).sendKeys("firstItem");
        this.driver.findElement(By.xpath("/html/body/form/p/input[2]")).click();
        this.driver.findElement(By.css('a[href="/todo/edit/0"]')).click();
        this.driver.findElement(By.id("edittodo")).sendKeys("firstEditedItem");
        this.driver.findElement(By.xpath("/html/body/form/p/input[3]")).click()



        //this.driver.findElement(By.css('a[href="/todo/delete/0"]')).click();
        //this.driver.findElement(By.xpath("//h3[contains(text(),'Schalk Nolte')]"))
            .then(function(position) {
                next();
            });
    });

    Then(/^edited Item should appear on list$/, function (next) {
        this.driver.findElements(By.xpath("//*[contains(text(),'firstEditedItem')]"))
        .then(function(elements) {
            expect(elements.length).to.equal(1);
            next();
        });
    });
});