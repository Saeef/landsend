(function(andRedEyelikeLandsEnd, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeLandsEnd = {
        init: function() {
            this.pgCssDesktop();
            this.pgCssMobile();
            this.undesires()
            this.moveEles();
        }, //init

        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = 'img.securehor {width:100%; height:auto; border:1px solid brown;} div.fooimg {max-width:1140px; margin:0 auto; width:95%;} ';
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
            //undesires:contacts&faqs
            var contacts = document.querySelectorAll('.linksbox')[1].children[1].children[1];
            contacts.parentElement.removeChild(contacts);
            var faqs = document.querySelectorAll('.linksbox')[1].children[1].children[1];
            faqs.parentElement.removeChild(faqs);
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
            ima.src = "images/securehor.png";
            ima.alt = "Quality.Guaranteed | Safe & Secure Shopping | Free Exchanges";
            //new div
            var div = document.createElement('div');
            div.className = "fooimg";
            //append img
            div.appendChild(ima);
            //append dom
            lef.parentElement.insertBefore(div,lef);
            //swimwear next to sale as sport
            var sport = document.querySelectorAll('.top-nav')[1].children[3];
            var handle = document.querySelectorAll('.top-nav')[1].children[6]
            handle.parentElement.insertBefore(sport,handle);
            sport.childNodes[1].innerText = "SPORT";

            
        } //moveEles


        
    };

(function() {

    

        SL.andRedEyelikeLandsEnd.init();
        


  
        

})();


}.call(window.andRedEyelikeLandsEnd || {}));