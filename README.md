# Norwegian Libraries

## A jQuery plugin to search norwegian libraries for books by title or ISBN

A simple jQuery plugin that allows your users to select one of over 400 Norwegian libraries, and search for a book by a supplied freetext search string. The string is supplied from your page when instantiating or by reference to a page element.

Once a library is selected, the user may select the library as their favourite by clicking the link following the select box. The same library will be preselected the next time the select box is used. 

Original written by [Eirik Krogstad](https://github.com/tangram/finn-boka/), rewritten and enhanced with UMD-wrapper for better support with browserify and tests for library-urls by [Gerhard Sletten](https://github.com/gerhardsletten).

## Usage with Browserify

`npm install norwegian-libraries`

```
var $ = require('jquery');
require("norwegian-libraries");

$(function() {
	$('.sel').norwegianLibraries({
		btnClass:"btn btn-primary",
		selectClass:"form-control",
		query:"erlend loe",
		formClass:"form-inline",
		cookieName : "kake-navn",
		onSubmit : function(library){
			console.log(library);
		},
		onSelect : function(library){
			console.log(library);
		}
	});
});
```

You can also use the library by including it in your document:

```
<script src="../dist/norwegian-libraries.min.js"></script>
```

## Development

Clone the repo and `npm install && npm start`. This should open a dev-server at [localhost:8080/examples/index.html](http://localhost:8080/examples/index.html)

## Preview

* [See examples and usage here](http://gerhardsletten.github.io/norwegian-libraries/)

## Test

Test url's to the list of libraries:

`npm test`

## License

[MIT License](https://opensource.org/licenses/MIT).
