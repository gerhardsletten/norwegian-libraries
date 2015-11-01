//var request = require('supertest');
var Nightmare = require('nightmare');
var expect = require('chai').expect; // jshint ignore:line
require('mocha-generators').install();
var nightmare = Nightmare();

var data = require('../src/libraries.json');

describe('Libraries', function() {
	data.forEach(function(link){
		describe(link.name, function () {
			it('It should have a name', function () {
				expect(link.name).to.be.a('string');
			});
			it('It should have a url', function () {
				expect(link.url).to.be.a('string');
			});
			it('It should have a id', function () {
				expect(link.id).to.be.a('number');
			});
			var query = link.url + "test";
			it('should contain a input with value "test"', function*() {
				this.timeout(25000);
				
				var input = yield nightmare
					.goto(query)
					.evaluate(function () {
					  return document.querySelector('input[value="test"]').value
					});
				expect(input).to.equal('test');
			});
		});
	});
});
