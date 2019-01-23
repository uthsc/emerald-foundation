//add active class to safari-bottom-nav-fix div on safari on ipads and ipods
$(document).ready(function () {

    var isIpadOrIpod = function() {
        if( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) ) {
            return true;
        }
    };

    var isSafari = function() {
        if (navigator.userAgent.match('Safari')) {
            if (navigator.userAgent.match('CriOS')) {
                return false;
            } else {
                return true;
            }
        }
    };

    if ( isIpadOrIpod() && isSafari() ) {
        $('.safari-bottom-nav-fix').each(function(i, item){
            $(item).addClass('safari-bottom-nav-fix--active');
        });
    }
});