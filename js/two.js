(function(andRedEyelikeLandsEnd, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeLandsEnd = {
        init: function() {
            this.pgCssDesktop();
            this.pgCssMobile();
            this.undesires()
            this.moveEles();
            this.secured();
        }, //init

        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = 'img.securehor {width:100%; height:auto; border:1px solid brown;} div.fooimg {max-width:1140px; margin:0 auto; width:95%;} footer {margin-top:6em;} .securever {width:100%; height:auto;} .fooimgver {padding-top:1.5em;max-width:333px; margin:0 auto;} ';
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
            //remove qg
            var qg = document.querySelectorAll('.qg-banner')[0];
            qg.parentElement.removeChild(qg);



        }, //undesires
       
        moveEles: function() {
            console.info('%c moveEles \u221a', 'background:blue;color:white;');
            //swimwear next to sale as sport
            var sport = document.querySelectorAll('.top-nav')[1].children[3];
            var handle = document.querySelectorAll('.top-nav')[1].children[6]
            handle.parentElement.insertBefore(sport,handle);
            sport.childNodes[1].innerText = "SPORT";

            
        }, //moveEles

        secured: function() {
            console.info('%c secured \u221a', 'background:blue;color:white;');
            //check handle
            var check = document.getElementById('checkout');
            //secured img
            var imas = document.createElement('img');
            imas.id = 'securever';
            imas.className = 'securever';
            imas.src = "images/securehor.png";
            imas.alt = "Quality.Guaranteed | Safe & Secure Shopping | Free Exchanges";
            //new div
            var div1 = document.createElement('div');
            div1.className = "fooimgver";
            div1.appendChild(imas);
            //append
            check.appendChild(div1);




        }//secured


        
    };

(function() {

    

        SL.andRedEyelikeLandsEnd.init();
        


  
        

})();


}.call(window.andRedEyelikeLandsEnd || {}));