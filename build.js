#!/usr/bin/env node
require('shelljs/make');
var fs = require('fs');
var path = require('path');
var replace = require('replace');

target.bundle = function () {
	rm('-Rf','./dist/*');
    cp('-fr', 'src/*.js', 'dist');
    var filePath = path.join(__dirname, 'src','libraries.json');
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (err) return console.log(err);
        ls('dist/*.js').forEach(function(file) {
          sed('-i', 'LIBRARIES', data, file);
          exec("uglifyjs ./" + file + " > ./" + file.substring(0, file.length-2) + "min.js");
        });
    });
};

