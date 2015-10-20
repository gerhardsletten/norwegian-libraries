(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';

    var NorwegianLibraries = window.NorwegianLibraries || {};

    NorwegianLibraries = (function() {

        var instanceUid = 0;

        function NorwegianLibraries(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                query:"",
                labelText: "Finn boka",
                labelClass: "",
                selectClass: "",
                btnString:"Finn boka",
                btnClass: "",
                favString: "Sett som favoritt",
                favClass: "",
                formClass:"",
                cookieName : "finn-boka-fav",
                onSubmit : false,
                onSelect : false
            };

            _.runtime = {
                selected : false
            };

            _.libraries = LIBRARIES;

            _.$element = $(element);

            dataSettings = $(element).data('norwegian-libraries') || {};

            _.options = $.extend({}, _.defaults, _.runtime, dataSettings, settings);

            _.init(true);
        }

        return NorwegianLibraries;

    }());

    NorwegianLibraries.prototype.init = function(creation) {
        var _ = this;
        if( creation ) {
            _.buildMarkup();
            _.initEvents();
            var cookieFav = parseInt(_.readCookie(_.options.cookieName));
            if( cookieFav > 0 ) {
                _.setSelected(cookieFav,creation);
            } else {
                _.setSelected(_.libraries[0].id,creation);
            }
        }
    };

    NorwegianLibraries.prototype.initEvents = function() {
        var _ = this;
        
        _.$element.on('submit','form',function(event){
            event.preventDefault();
            var id = _.options.selected,
            library = $.grep(_.libraries, function( n ) {
                return ( n.id === id );
            })[0];
            if(_.options.onSubmit) {
                return _.options.onSubmit(library);
            }
            window.location = library.url + _.options.query;
        });

        _.$element.on('change','select',function(event){
            _.setSelected(parseInt($(this).val()));
        });

        _.$element.on('click','a',function(event){
            event.preventDefault();
            _.setFavorite();
        });
    };

    NorwegianLibraries.prototype.setSelected = function(id,creation) {
        var _ = this;
        _.options.selected = id;
        _.$element.find('select').val(id);

        if(!creation && _.options.onSelect) {
            _.options.onSelect($.grep(_.libraries, function( n ) {
                return ( n.id === id );
            })[0]);
        }
    };

    NorwegianLibraries.prototype.setFavorite = function(id) {
        var _ = this;
        var id = id || _.options.selected;
        _.createCookie(_.options.cookieName, id);
    };

    NorwegianLibraries.prototype.buildMarkup = function(creation) {
        var _ = this,frag,container,label,labelText,select,option,optionText,btn,a,aText,space;

        frag = document.createDocumentFragment();
        container = document.createElement('form');
        container.className = _.options.formClass;
        frag.appendChild(container);
        space = function() { 
            return document.createTextNode(" ");
        }

        if(_.options.labelText) {
            label = document.createElement('label');
            label.className = _.options.labelClass;
            labelText = document.createTextNode(_.options.labelText);
            label.appendChild(labelText);
            container.appendChild(label);
            
        }
        container.appendChild(space());
        select = document.createElement('select');
        select.className = _.options.selectClass;

        $(_.libraries).each(function(index, library) {
            option = document.createElement('option');
            option.value = library.id;
            optionText = document.createTextNode(library.name);
            option.appendChild(optionText);
            select.appendChild(option);
        });
        container.appendChild(select);
        container.appendChild(space());

        btn = document.createElement('input');
        btn.type = "submit";
        btn.value = _.options.btnString;
        btn.className = _.options.btnClass;
        container.appendChild(btn);
        container.appendChild(space());

        if( _.options.favString ) {
            a = document.createElement('a');
            a.setAttribute('href','#');
            a.className = _.options.favClass;
            aText = document.createTextNode(_.options.favString);
            a.appendChild(aText);
            container.appendChild(a);
        }
        
        _.$element.html(frag);
    };

    NorwegianLibraries.prototype.createCookie = function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = '; expires=' + date.toGMTString();
        } else {
            var expires = '';
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    };

    NorwegianLibraries.prototype.readCookie = function(name) {
        var nameEq = name + '=';
        var cookies = document.cookie.split(';');
        for(var i = 0; i < cookies.length; i++) {
            var c = cookies[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEq) == 0)
                return c.substring(nameEq.length, c.length);
        }
        return null;
    };

    $.fn.norwegianLibraries = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new NorwegianLibraries(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

    $('[data-norwegian-libraries]').norwegianLibraries();

}));