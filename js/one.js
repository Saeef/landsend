(function(andRedEyelikeLandsEnd, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeLandsEnd = {
        init: function() {
            this.pgCssDesktop();
            this.pgCssMobile();
            this.undesires();
            this.moveEles();
        }, //init

        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = 'img.securehor {width:100%; height:auto; max-width:1000px;} div.fooimg {max-width:1000px; margin:0 auto; width:95%;} ';
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
            //remove cs
            var cs = document.querySelectorAll('.cs')[0];
            cs.parentElement.removeChild(cs);
            //remove qg
            var qg = document.querySelectorAll('.qg-banner')[0];
            qg.parentElement.removeChild(qg);

        }, //undesires
       
        moveEles: function() {
            console.info('%c moveEles \u221a', 'background:blue;color:white;');
            //handle
            var lef = document.querySelectorAll('.lefooter')[0];
            //image el
            var ima = document.createElement('img');
            ima.id = 'securehor';
            ima.className = 'securehor';
            ima.src = "https://sb.monetate.net/img/1/c/thumbnail/1545/6.11.eJwNyEsOgyAQANC7zNo4_AYKl2lURiFRNBVrk6Z3L6uXvC8kzkuqEJRyHRwvfme-n9NeKn_almtdO7heKwRItR4B8Rz7bS9ch8p9A_O2oMQJzzZ5QkmG0DhL3mP0s7Q8exZCqygHM5IZNFltyRlqo9mJ-FD9URbo4M6xJghSCPH7A_YoLtk.qefDgcOAJp7-CK4xkXKb_v4LFIunPCkEscA6sCe0nbk/1000x227.png";
            ima.alt = "Quality.Guaranteed | Safe & Secure Shopping | Free Exchanges";
            //new div
            var div = document.createElement('div');
            div.className = "fooimg";
            //append img
            div.appendChild(ima);
            //append dom
            lef.parentElement.insertBefore(div,lef);
            
            
        } //moveEles
        
    };

(function() {

        SL.andRedEyelikeLandsEnd.init();
})();


}.call(window.andRedEyelikeLandsEnd || {}));