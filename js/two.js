(function(andRedEyelikeLandsEnd, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeLandsEnd = {
        init: function() {
            this.pgCssDesktop();
            this.pgCssMobile();
            this.undesires();
            this.secured();
        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = 'img.securehor {width:100%; height:auto; } div.fooimg {max-width:1140px; margin:0 auto; width:95%;} footer {margin-top:6em;} .securever {width:100%; height:auto; max-width:293px;} .fooimgver {padding-top:1.5em;max-width:293px; margin:0 auto;} ';
            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);
        }, //pgCssDesktop
        pgCssMobile: function() {
            console.info('%c pgCssMobile \u221a', 'background:blue;color:white;');
            var mobcss = '@media screen and (max-device-width:480px) {.xxx {}  }';
            var head1 = document.getElementsByTagName('head')[0];
            function addMobcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head1.appendChild(s);
            }
            addMobcss(mobcss);
        }, //pgCssMobile
        undesires: function() {
            //remove qg
            var qg = document.querySelectorAll('.qg-banner')[0];
            qg.parentElement.removeChild(qg);
        }, //undesires
        
        secured: function() {
            console.info('%c secured \u221a', 'background:blue;color:white;');
            //check handle
            var check = document.getElementById('checkout');
            //secured img
            var imas = document.createElement('img');
            imas.id = 'securever';
            imas.className = 'securever';
            imas.src = "https://sb.monetate.net/img/1/c/thumbnail/1545/6.11.eJwNyFEOgyAMANC79NvYiorAZUzBTkgUjeJcsuzu8-sl7wtR0hwLuFZTBfsh7yT3GLZc5PNsvpalgutYwEEsZXeIp6_XLUvhIvUDpnXGBgOez6SATd_12A1aK4XGSJiCIsPsrSdSXinm0DFZY_ilm4HsRLqt9zxDBXeaSgSnbPv7A9-BL1c.SFkBtgJAhDAHjJfZPvWMYWZz1znbOcS4ct3e-i_B7AI/293x360.png";
            imas.alt = "Quality.Guaranteed | Safe & Secure Shopping | Free Exchanges";
            //new div
            var div1 = document.createElement('div');
            div1.className = "fooimgver";
            div1.appendChild(imas);
            //append
            check.appendChild(div1);
        } //secured
    };
    (function() {
        SL.andRedEyelikeLandsEnd.init();
    })();
}.call(window.andRedEyelikeLandsEnd || {}));