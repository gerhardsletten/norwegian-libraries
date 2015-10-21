var expect = require('chai').expect
var request = require('supertest');

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
			it('The url: ' + query + ' should return 200', function (done) {
				this.timeout(20000);
				var req = request(query);
				req
				.head()
				.expect(200,done);
			});
		});
	});
});
