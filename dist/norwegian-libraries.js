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

            _.libraries = [
    {
        "id":   151,
        "name": "Agdenes folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=agdenes-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   1,
        "name": "Alstahaug folkebibliotek",
        "url":  "http://www.alstahaug.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   2,
        "name": "Alta folkebibliotek",
        "url":  "http://websok.alta.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   152,
        "name": "Alvdal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-osterdal&unit=6466&sc=ft&sw="
    },
    {
        "id":   153,
        "name": "Andebu bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=andebu-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   3,
        "name": "Andøy folkebibliotek",
        "url":  "http://www.andoy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   154,
        "name": "Aremark folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=aremark-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   4,
        "name": "Arendal bibliotek",
        "url":  "http://www.arendal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   5,
        "name": "Asker bibliotek",
        "url":  "http://askbib.asker.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   155,
        "name": "Askim bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=askim-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   156,
        "name": "Askvoll bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=askvoll-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   6,
        "name": "Askøy folkebibliotek",
        "url":  "http://www.askoy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   157,
        "name": "Audnedal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-agder-felles&unit=6469&sc=ft&sw="
    },
    {
        "id":   158,
        "name": "Aukra folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=aukra-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   159,
        "name": "Aure folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=aure-fb&unit=12327&sc=ft&sw="
    },
    {
        "id":   160,
        "name": "Aurland folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=aurland-fb&unit=6463&sc=ft&sw="
    },
    {
        "id":   7,
        "name": "Aurskog-Høland bibliotek",
        "url":  "http://www.aurskog-holand.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   161,
        "name": "Austrheim folkebibliotek",
        "url": "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordhordland-felles&unit=12074&sc=ft&sw="
    },
    {
        "id":   162,
        "name": "Averøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=averoy-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   8,
        "name": "Balestrand folkebibliotek",
        "url":  "http://balestrand.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   9,
        "name": "Ballangen bibliotek",
        "url":  "http://www.ballangen.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   163,
        "name": "Balsfjord folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=balsfjord-fb&unit=6473&sc=ft&sw="
    },
    {
        "id":   10,
        "name": "Bamble bibliotek",
        "url":  "http://bambib.bamble.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   164,
        "name": "Bardu folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6493&sc=ft&sw="
    },
    {
        "id":   165,
        "name": "Beiarn folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=beiarn-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   166,
        "name": "Berg folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6475&sc=ft&sw="
    },
    {
        "id":   11,
        "name": "Bergen offentlige bibliotek",
        "url":  "http://www.bergen.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   167,
        "name": "Berlevåg folkebibliotek",
        "url":  "http://asp.bibliotekservice.no/berlevaag/portal.aspx"
    },
    {
        "id":   168,
        "name": "Bindal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=bindal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   169,
        "name": "Birkenes folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=birkenes-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   170,
        "name": "Bjerkreim folkebibliotek",
        "url":  "http://asp.bibliotekservice.no/bjerkreim/doclist.aspx?fquery=fr%3d"
    },
    {
        "id":   12,
        "name": "Bodø bibliotek",
        "url":  "http://www.bodo.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   13,
        "name": "Bokn bibliotek",
        "url":  "http://websok.bokn.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   171,
        "name": "Bremanger folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=bremanger-fb&unit=6463&sc=ft&sw="
    },
    {
        "id":   172,
        "name": "Brønnøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=bronnoy-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   173,
        "name": "Bygland folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=bygland-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   174,
        "name": "Bykle folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=bykle-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   175,
        "name": "Båtsfjord bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=batsfjord-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   14,
        "name": "Bærum bibliotek",
        "url":  "http://www.barum.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   15,
        "name": "Bømlo folkebibliotek",
        "url":  "http://www.bomlo.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   16,
        "name": "Deichmanske bibliotek",
        "url":  "http://www.deich.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   176,
        "name": "Dovre folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=dovre-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   17,
        "name": "Drammen bibliotek",
        "url":  "http://www.drammen.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   177,
        "name": "Drangedal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=drangedal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   178,
        "name": "Dyrøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=dyroy-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   18,
        "name": "Dønna bibliotek",
        "url":  "http://www.donna.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   179,
        "name": "Eid folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=eid-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   180,
        "name": "Eide bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=eide-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   181,
        "name": "Eidfjord bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=eidfjord-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   19,
        "name": "Eidsberg bibliotek",
        "url":  "http://www.eidsberg.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   182,
        "name": "Eidskog folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=eidskog-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   20,
        "name": "Eidsvoll bibliotek",
        "url":  "http://www.eidsvoll.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   21,
        "name": "Elverum bibliotek",
        "url":  "http://www.elverum.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   22,
        "name": "Enebakk bibliotek",
        "url":  "http://www.enebakk.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   23,
        "name": "Engerdal bibliotek",
        "url":  "http://www.engerdal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   24,
        "name": "Etne bibliotek",
        "url":  "http://www.etne.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   25,
        "name": "Etnedal bibliotek",
        "url":  "http://www.etnedal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   26,
        "name": "Evenes folkebibliotek",
        "url":  "http://www.evenes.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   183,
        "name": "Evje og Hornnes bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=evje-hornnes-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   27,
        "name": "Farsund bibliotek",
        "url":  "http://www.farsund.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   184,
        "name": "Fauske bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=fauske-fb&unit=6463&sc=ft&sw="
    },
    {
        "id":   185,
        "name": "Fedje folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordhordland-felles&unit=12082&sc=ft&sw="
    },
    {
        "id":   28,
        "name": "Fet folkebibliotek",
        "url":  "http://www.fet.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   29,
        "name": "Fitjar folkebibliotek",
        "url":  "http://www.stord.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   186,
        "name": "Fjaler folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=fjaler-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   30,
        "name": "Fjell folkeboksamling",
        "url":  "http://www.bivest.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   31,
        "name": "Flakstad folkebibliotek",
        "url":  "http://www.flakstad.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   187,
        "name": "Flatanger folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=midtre-namdal&unit=6469&sc=ft&sw="
    },
    {
        "id":   32,
        "name": "Flekkefjord bibliotek",
        "url":  "http://www.flekkefjord.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   188,
        "name": "Flesberg folkebibliotek",
        "url":  "http://asp.bibliotekservice.no/flesberg/doclist.aspx?fquery=fr%3d"
    },
    {
        "id":   189,
        "name": "Flora folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=flora-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   190,
        "name": "Flå folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hallingdal-felles&unit=12785&sc=ft&sw="
    },
    {
        "id":   191,
        "name": "Folldal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-osterdal&unit=6464&sc=ft&sw="
    },
    {
        "id":   192,
        "name": "Fosnes folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=midtre-namdal&unit=6467&sc=ft&sw="
    },
    {
        "id":   33,
        "name": "Fredrikstad bibliotek",
        "url":  "http://frdbib.fredrikstad.kommune.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   193,
        "name": "Frogn bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=frogn-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   194,
        "name": "Froland folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=froland-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   195,
        "name": "Frosta bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=frosta-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   196,
        "name": "Fræna folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=frana-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   197,
        "name": "Frøya bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=froya-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   34,
        "name": "Fusa folkebibliotek",
        "url":  "http://www.fusa.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   198,
        "name": "Fyresdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-telemark-felles&unit=12169&sc=ft&sw="
    },
    {
        "id":   35,
        "name": "Førde bibliotek",
        "url":  "http://www.sf.fylkesbibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   199,
        "name": "Gamvik folkebibliotek",
        "url":  "http://www.gamvik.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   36,
        "name": "Gaular folkebibliotek",
        "url":  "http://www.sf.fylkesbibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   37,
        "name": "Gausdal bibliotek",
        "url":  "http://www.gausdal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   200,
        "name": "Gildeskål folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=gsm&unit=19013&sc=ft&sw="
    },
    {
        "id":   201,
        "name": "Giske folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=giske-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   202,
        "name": "Gjemnes folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=gjemnes-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   38,
        "name": "Gjerdrum folkebibliotek",
        "url":  "http://www.gjerdrum.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   203,
        "name": "Gjerstad folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=gjerstad-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   204,
        "name": "Gjesdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=gjesdal-fb&unit=6463&sc=ft&sw="
    },
    {
        "id":   39,
        "name": "Gjøvik bibliotek",
        "url":  "http://www.gjovik.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   205,
        "name": "Gloppen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=gloppen-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   206,
        "name": "Gol bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hallingdal-felles&unit=12793&sc=ft&sw="
    },
    {
        "id":   207,
        "name": "Gran bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=gran-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   208,
        "name": "Granvin folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ulvik-fb&unit=6475&sc=ft&sw="
    },
    {
        "id":   209,
        "name": "Gratangen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6497&sc=ft&sw="
    },
    {
        "id":   210,
        "name": "Grimstad bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=grimstad-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   211,
        "name": "Grong folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=indre-namdal&unit=6471&sc=ft&sw="
    },
    {
        "id":   40,
        "name": "Grue folkebibliotek",
        "url":  "http://www.grue.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   212,
        "name": "Gulen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=gulen-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   213,
        "name": "Hadsel folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hadsel-fb&unit=6473&sc=ft&sw="
    },
    {
        "id":   41,
        "name": "Halden bibliotek",
        "url":  "http://www.halden.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   42,
        "name": "Hamar bibliotek",
        "url":  "http://www.hamar.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   214,
        "name": "Hamarøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nvgs&unit=12806&sc=ft&sw="
    },
    {
        "id":   43,
        "name": "Hammerfest bibliotek",
        "url":  "http://www.hammerfest.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   215,
        "name": "Haram folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=haram-fb&unit=6467&sc=ft&sw="
    },
    {
        "id":   216,
        "name": "Hareid folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=more-romsdal-felles&unit=6466&sc=ft&sw="
    },
    {
        "id":   44,
        "name": "Harstad bibliotek",
        "url":  "http://websok.harstad.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   217,
        "name": "Hattfjelldal folkebibliotek",
        "url":  "http://biblioteket.hattfjelldal-kommune.no/mikromarc3/web/search.aspx?db=hattfjelldal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   45,
        "name": "Haugesund folkebibliotek",
        "url":  "http://websok.haugesund.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   218,
        "name": "Hemne bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hemne-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   46,
        "name": "Hemnes folkebibliotek",
        "url":  "http://www.hemnes.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   219,
        "name": "Hemsedal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hallingdal-felles&unit=12799&sc=ft&sw="
    },
    {
        "id":   47,
        "name": "Herøy folkebibliotek (Nordland)",
        "url":  "http://www.heroy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   220,
        "name": "Herøy folkebibliotek (Møre og Romsdal)",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=more-romsdal-felles&unit=6465&sc=ft&sw="
    },
    {
        "id":   221,
        "name": "Hitra folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hitra-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   222,
        "name": "Hjartdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-telemark-felles&unit=12171&sc=ft&sw="
    },
    {
        "id":   223,
        "name": "Hjelmeland bibliotek",
        "url":  "http://www.hjelmeland.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   224,
        "name": "Hobøl bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hobol-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   48,
        "name": "Hof folkebibliotek",
        "url":  "http://www.hof.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   225,
        "name": "Hol folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hallingdal-felles&unit=12789&sc=ft&sw="
    },
    {
        "id":   226,
        "name": "Hole bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hole-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   227,
        "name": "Holmestrand bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=holmestrand-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   228,
        "name": "Holtålen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=holtalen-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   229,
        "name": "Hornindal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hornindal-fb&unit=6463&sc=ft&sw="
    },
    {
        "id":   49,
        "name": "Horten bibliotek",
        "url":  "http://www.horten.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   50,
        "name": "Hurdal bibliotek",
        "url":  "http://www.hurdal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   230,
        "name": "Hurum folkebibliotek",
        "url":  "http://bibliotek.hurum.kommune.no/bibliotek/doclist.aspx?fquery=fr%3d"
    },
    {
        "id":   51,
        "name": "Hvaler folkebibliotek",
        "url":  "http://hvalbib.hvaler.kommune.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   231,
        "name": "Hyllestad folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hyllestad-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   53,
        "name": "Hå folkebibliotek",
        "url":  "http://www.ha.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   232,
        "name": "Hægebostad og Eiken folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-agder-felles&unit=6471&sc=ft&sw="
    },
    {
        "id":   52,
        "name": "Høyanger bibliotek",
        "url":  "http://www.hoyanger.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   233,
        "name": "Høylandet folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=indre-namdal&unit=6473&sc=ft&sw="
    },
    {
        "id":   234,
        "name": "Ibestad folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ibestad-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   235,
        "name": "Inderøy bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=inderoy-fb&unit=6463&sc=ft&sw="
    },
    {
        "id":   236,
        "name": "Iveland folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=iveland-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   54,
        "name": "Jevnaker bibliotek",
        "url":  "http://www.jevnaker.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   55,
        "name": "Jølster folkebibliotek",
        "url":  "http://www.sf.fylkesbibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   237,
        "name": "Karasjok bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=karasjok-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   238,
        "name": "Karlsøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6477&sc=ft&sw="
    },
    {
        "id":   56,
        "name": "Karmøy folkebibliotek",
        "url":  "http://www.karmoy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   239,
        "name": "Kjøllefjord / Lebesby folkebibliotek",
        "url":  "http://www.kjollefjord.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   240,
        "name": "Klepp bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=jaerbiblioteka&unit=6477&sc=ft&sw="
    },
    {
        "id":   241,
        "name": "Klæbu folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=klabu-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   57,
        "name": "Kongsberg bibliotek",
        "url":  "http://www.kongsberg.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   58,
        "name": "Kongsvinger bibliotek",
        "url":  "http://www.kongsvinger.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   242,
        "name": "Kragerø bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=kragero-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   243,
        "name": "Kristiansand folkebibliotek",
        "url":  "http://aleph.kristiansand.kommune.no/f/?func=find-b&request="
    },
    {
        "id":   244,
        "name": "Kristiansund bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=kristiansund-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   59,
        "name": "Kvalsund bibliotek",
        "url":  "http://www.kvalsund.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   245,
        "name": "Kvam folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=kvam-jondal-felles&unit=6477&sc=ft&sw="
    },
    {
        "id":   246,
        "name": "Kvinesdal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=kvinesdal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   60,
        "name": "Kvinnherad bibliotek",
        "url":  "http://www.kvinnherad.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   247,
        "name": "Kviteseid bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-telemark-felles&unit=12177&sc=ft&sw="
    },
    {
        "id":   248,
        "name": "Kvitsøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=kvitsoy-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   249,
        "name": "Kvæfjord bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6481&sc=ft&sw="
    },
    {
        "id":   250,
        "name": "Kvænangen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-troms-felles&unit=6467&sc=ft&sw="
    },
    {
        "id":   251,
        "name": "Kåfjord bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-troms-felles&unit=6473&sc=ft&sw="
    },
    {
        "id":   61,
        "name": "Lardal bibliotek",
        "url":  "http://www.lardal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   62,
        "name": "Larvik bibliotek",
        "url":  "http://www.larvik.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   252,
        "name": "Lavangen bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6489&sc=ft&sw="
    },
    {
        "id":   253,
        "name": "Leikanger folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=leikanger-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   63,
        "name": "Leirfjord folkebibliotek",
        "url":  "http://www.leirfjord.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   254,
        "name": "Leka bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ytre-namdal&unit=6469&sc=ft&sw="
    },
    {
        "id":   255,
        "name": "Leksvik folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=leksvik-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   256,
        "name": "Lenvik folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6471&sc=ft&sw="
    },
    {
        "id":   257,
        "name": "Lesja bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=lesja-fb&unit=6473&sc=ft&sw="
    },
    {
        "id":   64,
        "name": "Levanger bibliotek",
        "url":  "http://levanger.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   65,
        "name": "Lier bibliotek",
        "url":  "http://www.lier.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   258,
        "name": "Lierne folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=indre-namdal&unit=6467&sc=ft&sw="
    },
    {
        "id":   66,
        "name": "Lillehammer bibliotek",
        "url":  "http://www.lillehammer.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   259,
        "name": "Lillesand fokebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=lillesand-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   260,
        "name": "Lindesnes folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=lindesnes-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   261,
        "name": "Lindås bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordhordland-felles&unit=12106&sc=ft&sw="
    },
    {
        "id":   262,
        "name": "Lom folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=lom-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   263,
        "name": "Longyearbyen bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=longyearbyen-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   264,
        "name": "Loppa folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=loppa-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   265,
        "name": "Lund folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=lund-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   266,
        "name": "Lunner bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=lunner-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   67,
        "name": "Lurøy bibliotek",
        "url":  "http://www.luroy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   267,
        "name": "Luster bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=luster-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   68,
        "name": "Lyngdal bibliotek",
        "url":  "http://websok.lyngdal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   268,
        "name": "Lyngen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-troms-felles&unit=6475&sc=ft&sw="
    },
    {
        "id":   269,
        "name": "Lærdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=laerdal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   270,
        "name": "Lødingen folkebibliotek",
        "url":  "http://lodingen.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   69,
        "name": "Lørenskog bibliotek",
        "url":  "http://www.lorenskog.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   271,
        "name": "Løten folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=loten-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   70,
        "name": "Malvik bibliotek",
        "url":  "http://www.malvik.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   272,
        "name": "Mandal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=mandal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   273,
        "name": "Marker bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=marker-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   274,
        "name": "Marnardal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-agder-felles&unit=6473&sc=ft&sw="
    },
    {
        "id":   275,
        "name": "Masfjorden folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordhordland-felles&unit=12180&sc=ft&sw="
    },
    {
        "id":   276,
        "name": "Meland bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordhordland-felles&unit=12148&sc=ft&sw="
    },
    {
        "id":   277,
        "name": "Meldal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=meldal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   278,
        "name": "Melhus bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=melhus-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   279,
        "name": "Meløy bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=gsm&unit=12828&sc=ft&sw="
    },
    {
        "id":   280,
        "name": "Meråker bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=meraker-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   281,
        "name": "Midtre Gauldal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=midtre-gauldal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   282,
        "name": "Modalen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordhordland-felles&unit=12212&sc=ft&sw="
    },
    {
        "id":   283,
        "name": "Modum bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=modum-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   284,
        "name": "Molde bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=molde-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   71,
        "name": "Moskenes folkebibliotek",
        "url":  "http://www.moskenes.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   72,
        "name": "Moss bibliotek",
        "url":  "http://www.moss.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   285,
        "name": "Målselv bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6487&sc=ft&sw="
    },
    {
        "id":   286,
        "name": "Måsøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=masoy-fb&unit=6473&sc=ft&sw="
    },
    {
        "id":   287,
        "name": "Namdalseid folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=namdalseid-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   288,
        "name": "Namsos folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=midtre-namdal&unit=6465&sc=ft&sw="
    },
    {
        "id":   289,
        "name": "Namsskogan folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=indre-namdal&unit=6477&sc=ft&sw="
    },
    {
        "id":   73,
        "name": "Nannestad bibliotek",
        "url":  "http://www.nannestad.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   74,
        "name": "Narvik bibliotek",
        "url":  "http://www.narvik.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   75,
        "name": "Naustdal bibliotek",
        "url":  "http://www.sf.fylkesbibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   76,
        "name": "Nedre Eiker bibliotek",
        "url":  "http://www.nedre-eiker.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   77,
        "name": "Nes bibliotek (Akershus)",
        "url":  "http://www.nes-ak.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   290,
        "name": "Nes folkebibliotek (Buskerud)",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hallingdal-felles&unit=12811&sc=ft&sw="
    },
    {
        "id":   78,
        "name": "Nesna folkebibliotek",
        "url":  "http://www.nesna.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   291,
        "name": "Nesodden bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nesodden-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   292,
        "name": "Nesseby bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nesseby-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   293,
        "name": "Nesset folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nesset-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   294,
        "name": "Nissedal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-telemark-felles&unit=12193&sc=ft&sw="
    },
    {
        "id":   79,
        "name": "Nittedal bibliotek",
        "url":  "http://www.nittedal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   295,
        "name": "Nome folkebibliotek",
        "url":  "http://telebib.tm.fylkesbibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   80,
        "name": "Nord-Aurdal bibliotek",
        "url":  "http://www.nord-aurdal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   81,
        "name": "Nord-Fron bibliotek",
        "url":  "http://nfroweb.nord-fron.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   82,
        "name": "Nord-Odal bibliotek",
        "url":  "http://www.nord-odal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   296,
        "name": "Norddal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=norddal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   297,
        "name": "Nordkapp bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordkapp-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   298,
        "name": "Nordre Land folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordre-land-fb&unit=6463&sc=ft&sw="
    },
    {
        "id":   299,
        "name": "Nordreisa bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-troms-felles&unit=6469&sc=ft&sw="
    },
    {
        "id":   83,
        "name": "Notodden bibliotek",
        "url":  "http://websok.notodden.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   300,
        "name": "Nærøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ytre-namdal&unit=6465&sc=ft&sw="
    },
    {
        "id":   301,
        "name": "Odda bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=odda-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   302,
        "name": "Oppdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=oppdal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   84,
        "name": "Oppegård bibliotek",
        "url":  "http://www.oppegard.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   303,
        "name": "Orkdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=orkdal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   304,
        "name": "Os bibliotek (Hedmark)",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=osroros-felles&unit=12111&sc=ft&sw="
    },
    {
        "id":   305,
        "name": "Os folkebibliotek (Hordaland)",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=os-hordaland-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   306,
        "name": "Osen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=osen-fb&unit=6464&sc=ft&sw="
    },
    {
        "id":   307,
        "name": "Osterøy bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordhordland-felles&unit=12230&sc=ft&sw="
    },
    {
        "id":   308,
        "name": "Overhalla folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=overhalla-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   309,
        "name": "Porsanger bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=porsanger-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   85,
        "name": "Porsgrunn bibliotek",
        "url":  "http://www.porsgrunn.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   310,
        "name": "Radøy bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nordhordland-felles&unit=12270&sc=ft&sw="
    },
    {
        "id":   311,
        "name": "Rakkestad bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=rakkestad-fb&unit=6473&sc=ft&sw="
    },
    {
        "id":   86,
        "name": "Rana bibliotek",
        "url":  "http://www.rana.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   312,
        "name": "Randaberg folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=randaberg-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   87,
        "name": "Rauma folkebibliotek",
        "url":  "http://www.rauma.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   88,
        "name": "Re bibliotek",
        "url":  "http://www.re.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   89,
        "name": "Rendalen bibliotek",
        "url":  "http://www.rendalen.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   313,
        "name": "Rennebu folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=rennebu-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   90,
        "name": "Rennesøy folkebibliotek",
        "url":  "http://www.rennesoy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   314,
        "name": "Rindal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=surnadal-fb&unit=6469&sc=ft&sw="
    },
    {
        "id":   91,
        "name": "Ringebu folkebibliotek",
        "url":  "http://www.ringebu.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   92,
        "name": "Ringerike bibliotek",
        "url":  "http://ringerike.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   93,
        "name": "Ringsaker bibliotek",
        "url":  "http://ringsaker.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   315,
        "name": "Rissa bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=rissa-fb&unit=12230&sc=ft&sw="
    },
    {
        "id":   94,
        "name": "Risør bibliotek",
        "url":  "http://www.risor.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   95,
        "name": "Rjukan folkebibliotek",
        "url":  "http://www.rjukan.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   316,
        "name": "Roan folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=roan-fb&unit=6473&sc=ft&sw="
    },
    {
        "id":   317,
        "name": "Rollag folkebibliotek",
        "url":  "http://asp.bibliotekservice.no/rollag/doclist.aspx?fquery=fr%3d"
    },
    {
        "id":   318,
        "name": "Rygge bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=rygge-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   100,
        "name": "Råde bibliotek",
        "url":  "http://www.rade.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   96,
        "name": "Rælingen bibliotek",
        "url":  "http://ralingen.akershus.fylkesbibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   97,
        "name": "Rødøy folkebibliotek",
        "url":  "http://www.rodoy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   319,
        "name": "Rømskog folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=romskog-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   320,
        "name": "Røros folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=osroros-felles&unit=12127&sc=ft&sw="
    },
    {
        "id":   98,
        "name": "Røst folkebibliotek",
        "url":  "http://www.rost.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   99,
        "name": "Røyken bibliotek",
        "url":  "http://websok.royken.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   321,
        "name": "Røyrvik bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=indre-namdal&unit=6469&sc=ft&sw="
    },
    {
        "id":   322,
        "name": "Salangen folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6485&sc=ft&sw="
    },
    {
        "id":   323,
        "name": "Saltdal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=saltdal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   324,
        "name": "Samnanger folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=samnanger-fb&unit=6464&sc=ft&sw="
    },
    {
        "id":   325,
        "name": "Sande bibliotek (Møre og Romsdal)",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=more-romsdal-felles&unit=6464&sc=ft&sw="
    },
    {
        "id":   326,
        "name": "Sande folkebibliotek (Vestfold)",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sande-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   101,
        "name": "Sandefjord bibliotek",
        "url":  "http://www.sandefjord.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   327,
        "name": "Sandnes bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sandnes-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   328,
        "name": "Sandøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sandoy-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   329,
        "name": "Sarpsborg bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sarpsborg-fb&unit=6477&sc=ft&sw="
    },
    {
        "id":   330,
        "name": "Sauda folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ryfylkebiblioteket&unit=29587&sc=ft&sw="
    },
    {
        "id":   331,
        "name": "Sauherad folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sauherad-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   102,
        "name": "Sel bibliotek",
        "url":  "http://websok.sel.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   332,
        "name": "Selbu folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=selbu-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   333,
        "name": "Selje folkeboksamling",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=selje-fb&unit=6469&sc=ft&sw="
    },
    {
        "id":   334,
        "name": "Seljord folkeboksamling",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-telemark-felles&unit=12189&sc=ft&sw="
    },
    {
        "id":   335,
        "name": "Siljan bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=siljan-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   336,
        "name": "Sirdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sirdal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   337,
        "name": "Skaun folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=skaun-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   103,
        "name": "Skedsmo bibliotek",
        "url":  "http://skedsmo.akershus.fylkesbibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   338,
        "name": "Ski bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ski-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   104,
        "name": "Skien bibliotek",
        "url":  "http://www.skien.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   105,
        "name": "Skiptvet bibliotek",
        "url":  "http://www.skiptvet.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   339,
        "name": "Skjervøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-troms-felles&unit=6483&sc=ft&sw="
    },
    {
        "id":   340,
        "name": "Skjåk folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=skjak-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   341,
        "name": "Skodje folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=skodje-orskog-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   106,
        "name": "Skånland bibliotek",
        "url":  "http://www.skanland.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   342,
        "name": "Smøla folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=smola-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   344,
        "name": "Snåsa folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=indre-namdal&unit=6465&sc=ft&sw="
    },
    {
        "id":   107,
        "name": "Sogndal bibliotek",
        "url":  "http://sdalbib.sogndal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   345,
        "name": "Sola folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=jaerbiblioteka&unit=6477&sc=ft&sw="
    },
    {
        "id":   346,
        "name": "Solund folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=solund-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   347,
        "name": "Songdalen bibliotek",
        "url":  "http://websok.songdalen-bibliotek.no/mikromarc3/web/search.aspx?db=mikromarc3&unit=6471&sc=ft&sw="
    },
    {
        "id":   108,
        "name": "Sortland bibliotek",
        "url":  "http://www.sortland.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   348,
        "name": "Spydeberg bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=spydeberg-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   349,
        "name": "Stange bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=stange-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   350,
        "name": "Stavanger bibliotek",
        "url":  "http://aleph.stavanger.kommune.no/f/?func=find-b&request="
    },
    {
        "id":   109,
        "name": "Steigen folkebibliotek",
        "url":  "http://steigen.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   110,
        "name": "Steinkjer bibliotek",
        "url":  "http://websok.steinkjer.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   351,
        "name": "Stjørdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=stjordal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   352,
        "name": "Stokke bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=stokke-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   111,
        "name": "Stor-Elvdal bibliotek",
        "url":  "http://www.stor-elvdal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   112,
        "name": "Stord folkebibliotek",
        "url":  "http://www.stord.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   354,
        "name": "Stordal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=stordal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   355,
        "name": "Storfjord folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-troms-felles&unit=6479&sc=ft&sw="
    },
    {
        "id":   356,
        "name": "Strand bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ryfylkebiblioteket&unit=29587&sc=ft&sw="
    },
    {
        "id":   357,
        "name": "Stranda folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=stranda-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   358,
        "name": "Stryn folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=stryn-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   359,
        "name": "Sula bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sula-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   360,
        "name": "Suldal folkebibliotek",
        "url":  "http://www.suldal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   113,
        "name": "Sund folkebibliotek",
        "url":  "http://www.bivest.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   361,
        "name": "Sunndal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sunndal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   362,
        "name": "Surnadal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=surnadal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   114,
        "name": "Sveio bibliotek",
        "url":  "http://www.sveio.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   115,
        "name": "Svelvik bibliotek",
        "url":  "http://www.svelvik.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   363,
        "name": "Sykkylven bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sykkylven-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   116,
        "name": "Søgne bibliotek",
        "url":  "http://www.sogne.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   364,
        "name": "Sømna folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=somna-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   365,
        "name": "Søndre Land folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sondre-land-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   117,
        "name": "Sør-Aurdal folkebibliotek",
        "url":  "http://www.sor-aurdal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   366,
        "name": "Sør-Fron bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sor-fron-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   118,
        "name": "Sør-Odal bibliotek",
        "url":  "http://www.sor-odal.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   367,
        "name": "Sør-Varanger bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sorvaranger-fb&unit=6473&sc=ft&sw="
    },
    {
        "id":   368,
        "name": "Sørfold folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=sorfold-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   369,
        "name": "Sørreisa folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6483&sc=ft&sw="
    },
    {
        "id":   119,
        "name": "Sørum bibliotek",
        "url":  "http://www.sorum.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   370,
        "name": "Tana bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=tana-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   371,
        "name": "Time bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=jaerbiblioteka&unit=6477&sc=ft&sw="
    },
    {
        "id":   372,
        "name": "Tingvoll folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=tingvoll-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   373,
        "name": "Tjeldsund folkebibliotek",
        "url":  "http://tjeldsund.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   374,
        "name": "Tjøme folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=tjome-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   375,
        "name": "Tokke folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-telemark-felles&unit=12163&sc=ft&sw="
    },
    {
        "id":   376,
        "name": "Tolga folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-osterdal&unit=6465&sc=ft&sw="
    },
    {
        "id":   377,
        "name": "Tranøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=troms-felles&unit=6495&sc=ft&sw="
    },
    {
        "id":   120,
        "name": "Tromsø bibliotek",
        "url":  "http://www.tromso.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   121,
        "name": "Trondheim folkebibliotek",
        "url":  "http://www.trondheim.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   122,
        "name": "Trysil folkebibliotek",
        "url":  "http://www.trysil.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   123,
        "name": "Træna folkebibliotek",
        "url":  "http://www.trana.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   378,
        "name": "Trøgstad bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=trogstad-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   379,
        "name": "Tvedestrand folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=tvedestrand-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   380,
        "name": "Tydal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=tydal-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   381,
        "name": "Tynset bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=nord-osterdal&unit=6467&sc=ft&sw="
    },
    {
        "id":   124,
        "name": "Tysfjord folkebibliotek",
        "url":  "http://www.tysfjord.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   382,
        "name": "Tysnes folkebibliotek",
        "url":  "http://asp.bibliotekservice.no/tysnes/doclist.aspx?fquery=fr%3d"
    },
    {
        "id":   125,
        "name": "Tysvær folkebibliotek",
        "url":  "http://www.tysver.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   126,
        "name": "Tønsberg og Nøtterøy bibliotek",
        "url":  "http://websok.tonsberg.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   127,
        "name": "Ullensaker bibliotek",
        "url":  "http://www.ullensaker.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   383,
        "name": "Ullensvang bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ullensvang-fb&unit=6489&sc=ft&sw="
    },
    {
        "id":   384,
        "name": "Ulstein bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=more-romsdal-felles&unit=6463&sc=ft&sw="
    },
    {
        "id":   385,
        "name": "Ulvik folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ulvik-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   128,
        "name": "Utsira folkebibliotek",
        "url":  "http://www.utsira.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   129,
        "name": "Vadsø bibliotek",
        "url":  "http://www.vadso.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   386,
        "name": "Vaksdal folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vaksdal-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   387,
        "name": "Valle folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=valle-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   130,
        "name": "Vang folkebibliotek",
        "url":  "http://www.vang.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   388,
        "name": "Vanylven folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vanylven-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   389,
        "name": "Vardø folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vardo-fb&unit=6473&sc=ft&sw="
    },
    {
        "id":   131,
        "name": "Vefsn bibliotek",
        "url":  "http://www.vefsn.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   390,
        "name": "Vega folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vega-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   391,
        "name": "Vegårshei folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vegarshei-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   132,
        "name": "Verdal bibliotek",
        "url":  "http://verbib.verdal.kommune.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   133,
        "name": "Verran folkebibliotek",
        "url":  "http://websok-verran.steinkjer.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   392,
        "name": "Vestby bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vestby-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   393,
        "name": "Vestnes folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vestnes-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   134,
        "name": "Vestre Slidre bibliotek",
        "url":  "http://www.vestre-slidre.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   135,
        "name": "Vestre Toten bibliotek",
        "url":  "http://www.vestre-toten.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   136,
        "name": "Vestvågøy bibliotek",
        "url":  "http://www.vestvagoy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   394,
        "name": "Vevelstad folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vevelstad-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   395,
        "name": "Vik folkebibliotek",
        "url":  "http://asp.bibliotekservice.no/vik/doclist.aspx?fquery=fr%3d"
    },
    {
        "id":   396,
        "name": "Vikna folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ytre-namdal&unit=6467&sc=ft&sw="
    },
    {
        "id":   137,
        "name": "Vindafjord folkebibliotek",
        "url":  "http://www.vindafjord.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   397,
        "name": "Vinje folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-telemark-felles&unit=22889&sc=ft&sw="
    },
    {
        "id":   398,
        "name": "Volda folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=orsta-volda-fb&unit=6475&sc=ft&sw="
    },
    {
        "id":   138,
        "name": "Voss folkebibliotek",
        "url":  "http://www.voss.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   140,
        "name": "Vågan bibliotek",
        "url":  "http://www.vagan.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   399,
        "name": "Vågsøy folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vagsoy-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   400,
        "name": "Vågå bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vaga-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   401,
        "name": "Våler bibliotek (Østfold)",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=valer-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   141,
        "name": "Våler folkebibliotek (Hedmark)",
        "url":  "http://www.vaaler-he.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   139,
        "name": "Værøy folkebibliotek",
        "url":  "http://www.varoy.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   404,
        "name": "Åfjord folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=afjord-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   405,
        "name": "Ål bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=hallingdal-felles&unit=12779&sc=ft&sw="
    },
    {
        "id":   148,
        "name": "Ålesund bibliotek",
        "url":  "http://websok.alesund.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   406,
        "name": "Åmli bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=amli-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   149,
        "name": "Åmot folkebibliotek",
        "url":  "http://www.amot.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   407,
        "name": "Årdal bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=ardal-fb&unit=12764&sc=ft&sw="
    },
    {
        "id":   408,
        "name": "Ås bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=as-fb&unit=29490&sc=ft&sw="
    },
    {
        "id":   409,
        "name": "Åseral bibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=vest-agder-felles&unit=6465&sc=ft&sw="
    },
    {
        "id":   150,
        "name": "Åsnes folkebibliotek",
        "url":  "http://www.asnes.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   142,
        "name": "Øksnes bibliotek",
        "url":  "http://www.oksnes.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   402,
        "name": "Ørskog folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=skodje-orskog-fb&unit=6465&sc=ft&sw="
    },
    {
        "id":   403,
        "name": "Ørsta folkebibliotek",
        "url":  "http://websok.mikromarc.no/mikromarc3/web/search.aspx?db=orsta-volda-fb&unit=6471&sc=ft&sw="
    },
    {
        "id":   143,
        "name": "Østre Toten bibliotek",
        "url":  "http://websok.ostre-toten.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   144,
        "name": "Øvre Eiker bibliotek",
        "url":  "http://www.ovre-eiker.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   145,
        "name": "Øyer folkebibliotek",
        "url":  "http://www.oyer.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   146,
        "name": "Øygarden bibliotek",
        "url":  "http://www.bivest.bib.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    },
    {
        "id":   147,
        "name": "Øystre Slidre folkebibliotek",
        "url":  "http://www.oystre-slidre.folkebibl.no/cgi-bin/websok?mode=vt&pubsok_txt_0="
    }
];

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